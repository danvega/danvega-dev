---
title: Creating multiple directories in node
slug: node-recursive-directories
date: 2019-02-20 08:00:00
published: true
excerpt: A quick tutorial on how to recursively create directories in node.
author: Dan Vega
tags: node,javascript
cover: ./node-multiple-directories.png
---

 This is going to be a quick tutorial but I think it's one that I want to share. I am in the middle of migrating close to 1,000 blog posts from WordPress to Gridsome, a static site generator. 
 
 As any good (lazy) developer would, I did some searching around for a migration script. With Gridsome being a fairly new project I knew that my chances of finding a script would be pretty slim. After spending about 10 minutes looking around I found that my assumptions were true. 

 Not to worry because I wasn't really doing anything that was Gridsome specific. What I wanted to do was convert a bunch of WordPress posts into Markdown. With all of the great blogs written on top of static site generators like [Hugo](https://gohugo.io/), [Jekyll](https://jekyllrb.com/), and [Gatsby](https://www.gatsbyjs.org/) I was sure that I could find something close to what I was looking for.

Sure enough, I came across a this awesome [Gatsby to WordPress](https://github.com/konsalex/gatsby-wordpress-migrate) migration script by Costa Alexoglou. This script will take your WordPress posts (exported out as XML) and convert them to Markdown. This was a good start for me but one of the things I needed to do was put the markdown files into a specific folder format.

## Directory Format

I needed to stick to the url format that my existing posts were in which was **/blog/:year/:month/:day/:slug**. I also needed to make sure that parts of the date were formatted in the following format: 

* Year: 4 digits
* Month: 2 digits
* Day: 2 digits

![Calendar](undraw_calendar_dutt.png)

 Before I could even begin to worry about creating a new directory (or directories) I needed to get the 3 parts I needed from the date for that blog post in the format I needed them. The first thing I did was to create a new date called createdOn from the post date.

```javascript
const header = {
    date: '2019-02-21 08:00:00'
}
 const createdOn = new Date(header.date);
```

Now that I had a [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object I could use the API to get the different parts that I wanted. The year was the easiest while I had to do some work to get the month and day in the format I wanted them in. 

The month and day were not as easy. First off both `getMonth()` & `getDate()` of them return to you 1,2,3... and I needed them in 2 digit format 01,02,03. For both of those I used a ternary operator to pad it with a 0 if the number was less than 10.

The other gotcha here is that `getMonth()` returns the month as a zero based value so January is 0. Knowing that I will need to add 1 to each value returned from `getMonth()`.

```javascript
const header = {
    date: '2019-02-21 08:00:00'
}
 const createdOn = new Date(header.date);
 const year = createdOn.getFullYear();
 const month = `${createdOn.getMonth()+1 < 10 ? '0' : ''}${createdOn.getMonth()+1}`;
 const day = `${createdOn.getDate() < 10 ? '0' : ''}${createdOn.getDate()}`;
```

While this wasn't super hard it isn't the easiest or most elegant solution. Dates just always seem to be a pain point in every language and they all have their quirks. I thought I would take the Twitter and see if anyone could help me out. 

https://twitter.com/therealdanvega/status/1098667133112934401

I didn't get any real good answers so for now that is what I am going to stick with. It was also pointed out to me that IE11 won't support creating a Date from a string. You should look into browser compatibility when you have to worry about it but in my case this is just a local script that I am running so I'm not worried.


So if you're following along so far you should have something that looks like this. 

 ```javascript
const header = {
    date: '2019-02-20 08:00:00'
}

 const createdOn = new Date(header.date);
 const year = createdOn.getFullYear();
 const month = `${createdOn.getMonth()+1 < 10 ? '0' : ''}${createdOn.getMonth()+1}`;
 const day = `${createdOn.getDate() < 10 ? '0' : ''}${createdOn.getDate()}`;
 ```

 ## Using node to write directories

Now that we have the parts we need for the directory lets create the full blog post directory. I am storing everything in a relative folder to this script in the form of `/blog/:year/:month/:day` and then the name of the file would be `:slug.md`. So I am going to start by creating a variable called `blogPostFolder` and I will create the path using a template literal.

```javascript
const blogPostFolder = `./blog/${year}/${month}/${day}`
```

Next we are going to tap into [Node's Files System API](https://nodejs.org/api/fs.html) to actually create the directory. To use the file system module

 ```javascript
const fs = require('fs');
 ```

 There is a method in the file system API to make a directory. The default method is asynchronous but for our case we will actually want this to be synchronous so we will use [`mkdirSync()`](https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_options). The first argument to this method is the path for the directory that you want to create. If you try and run this method using the blog post folder path: 

```javascript
fs.mkdirSync(blogPostFolder);
```

You will get the following error: 

```bash
vega recursive-dirs $ node app.js 
./blog/2019/02/21
fs.js:115
    throw err;
    ^

Error: ENOENT: no such file or directory, mkdir './blog/2019/02/21'
    at Object.mkdirSync (fs.js:753:3)
    at Object.<anonymous> (/Users/vega/dev/node/recursive-dirs/app.js:16:4)
    at Module._compile (internal/modules/cjs/loader.js:689:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
    at Module.load (internal/modules/cjs/loader.js:599:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
    at Function.Module._load (internal/modules/cjs/loader.js:530:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:742:12)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)
```

This is because there is no blog folder yet and if there is no parent folder how is it going to create sub folders. If you create a blog folder you will have the same problem because there is no 2019 folder. 

The solution to this is to recursively create directories but by default this isn't the case. The 2nd argument to the `mkdirSync()` method is an options object that contains a property called recursive. If you set this true and run your script again everything should work just fine.

```javascript
fs.mkdirSync(blogPostFolder,{recursive: true});
```

> I am not 100% sure on this but it appears this option is working as of v10.15.1

If you have been following along you should end up with something like this

```javascript
const fs = require('fs');

const header = {
    date: '2019-02-20 08:00:00'
}

const createdOn = new Date(header.date);
const year = createdOn.getFullYear();
const month = `${createdOn.getMonth()+1 < 10 ? '0' : ''}${createdOn.getMonth()+1}`;
const day = `${createdOn.getDate() < 10 ? '0' : ''}${createdOn.getDate()}`;

const blogPostFolder = `./blog/${year}/${month}/${day}`

fs.mkdirSync(blogPostFolder,{recursive: true});
```
 
## Conclusion

This was just a small problem that came up during the migration. If anyone is interested in hearing specific on the migration script please let me know. I wanted to keep this post focused on the problem and I hope it helps someone out. 

Happy Coding<br/>
Dan

