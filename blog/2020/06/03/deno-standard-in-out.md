---
slug: "deno-stdin-stdout"
title: "Working with Standard Input and Output in Deno"
date: "2020-06-03T20:00:00.500Z"
published: false
excerpt: "In this tutorial I will show you how to work with standard input and output in Deno."
author: "Dan Vega"
tags:
  - "deno"
  - "javascript"
cover: "./deno_stdin_stdout-cover.png"
---

I recently posted a [introduction to Deno](https://www.danvega.dev/blog/2020/05/29/hello-deno/) where I walk through how to get Deno installed and the features I think make it an exciting project. The next step for me was to start building something with Deno.

The first project I took a look at was a node script I used to [generate new blog posts](https://www.danvega.dev/blog/2019/04/23/gridsome-blog-post-generator/) in Gridsome. Before I tackle the entire script I want to use this tutorial to discuss how you can work with standard input and output in Deno.

## Standard Input & Standard Output

Before you write any code I think it is important for you to understand what standard in and standard out are. Standard output, sometimes abbreviated `stdout`, refers to the standardized stream to which a program writes its output data. Standard input, sometimes abbreviated `stdin` is a stream from which a program reads its input data. Without getting into low level abstractions this is way to read and write data.

## Deno stdin & stdout

Now that you have an understanding of what standard in & out are let's talk about them in the context of Deno. If you want to get a handle for [`stdin`](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.stdin) or [`stdout`](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#Deno.stdout) you can use the properties from the Deno Runtime API:

```ts
Deno.stdin;
Deno.stdout;
```

If you take a look at the source for Deno you will see the following:

```ts
/** A handle for `stdin`. */
export const stdin: Reader & ReaderSync & Closer & { rid: number };
/** A handle for `stdout`. */
export const stdout: Writer & WriterSync & Closer & { rid: number };
```

If you're new to TypeScript that probably looks a little confusing but don't let it scare you. Deno is declaring a variable called `stdin` that is a type that combines `Reader`, `ReaderSync` and `Closer` and an object with a property called rid. In TypeScript these are called [Intersection Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html#intersection-types) and they are pretty darn cool once you start using them.

### Deno Standard Output

So you know about standard out and how to get a handle on it in Deno. I want to come back to the problem at hand and that is replacing a blog post generator I wrote in Node. To do so the first task will be to ask the user (me) for some information about the post. Deno is trying to stay compatible with Browser APIs so one option we have is to just use `console.log()`.

```js
console.log("Post Title:");
```

The problem with this is you are always going to get a new line feed so the user won't be able to type a response on the same line which isn't what I want. No worries though, now that we know `stdout` is of type `Writer` which exports a single method `write()` we can just use that.

With that said, `write()` doesn't take a simple string so it won't be that easy. This method will write p.byteLength bytes from p to the underlying data stream. This method returns a promise but with `top-level-await` support this will be easy.

```ts
write(p: Uint8Array): Promise<number>
```

So now we just need to figure out how to pass in a simple string to the write method. It turns out there is a class in the Runtime API to help us out with this called [`TextEncoder`](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts#TextEncoder). This class has a method called `encode()` that will return a `Uint8Array` which is exactly what we are looking for! Putting this all together we can prompt the user for the post title:

```ts
await Deno.stdout.write(new TextEncoder().encode("Post Title: "));
```

If you were to run that it will print prompt for the post title but because there is nothing to follow the program just ends. Now we need to actually read in the response.

### Deno Standard Input

Looking back at the source for `stdin` you can see that is of type `Reader`.

```ts
/** A handle for `stdin`. */
export const stdin: Reader & ReaderSync & Closer & { rid: number };
```

Reader is an interface that has a single method that takes in a `Uint8Array`. It resolves to the number of bytes read (`0` < `n` <= `p.byteLength`) and rejects if any error encountered.

```ts
export interface Reader {
  read(p: Uint8Array): Promise<number | null>;
}
```

The first thing you need to do is create a buffer and pass that in to the read method. Remember the read method will return a Promise with number of bytes read so we are going to wait for that result.

```ts
const buf = new Uint8Array(1024);
const n = <number>await Deno.stdin.read(buf);
```

Finally you need a way to turn that byte array into a string. The `TextDecoder` class has a method `decode()` that can help us out with that.

```ts
decode(input?: BufferSource, options?: { stream: false }): string
```

You will pass in the byte array and extract the positions that contain a value.

```ts
const buf = new Uint8Array(1024);
const n = <number>await Deno.stdin.read(buf);
const title = new TextDecoder().decode(buf.subarray(0, n)).trim();
console.log(title);
```

## Deno: Writing Standard Out and Reading Standard In

We could just repeat those same steps for each field we wanted to prompt the user for but that would get pretty repetitive. Whenever you start duplicating code an alarm should go off in your head and mine did here. Let's wrap our logic up into a function:

```ts
/*
 * Prompt for a response
 */
async function prompt(message: string = "") {
  const buf = new Uint8Array(1024);
  await Deno.stdout.write(new TextEncoder().encode(message + ": "));
  const n = <number>await Deno.stdin.read(buf);
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}
```

And these are the values I would like to ask the user for when I run the script:

```js
const title = await prompt("Post Title");
const manualSlug = await prompt("Slug (Leave blank to generate)");
const excerpt = await prompt("Post Excerpt");
const tags = await prompt("Tags (comma separated)");
```

## Conclusion

I hope this article helped you understand how to use standard in and standard out in Deno. I want to give a huge shout out to József Sallai who create the [ask library](https://github.com/jozsefsallai/ask/blob/master/README.md). It was a combination of digging through that code and the Deno documentation that I was able to piece this together.
