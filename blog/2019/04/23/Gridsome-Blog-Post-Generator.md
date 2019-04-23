---
slug: "Gridsome-Blog-Post-Generator"
title: "Gridsome Blog Post Generator"
date: "2019-04-23T19:28:51.186Z"
excerpt: "In this article I will show you how to crate a blog post generator for your static site."
author: "Dan Vega"
tags: ["gridsome", "vue"]
cover: ./gridsome-post-generator-cover.png
---

If you're using something like [Gatsby](https://www.gatsbyjs.org/) or [Gridsome](https://gridsome.org/) as your blogging platform there is no UI to create a new blog post. The process usually starts with creating a directory or series of directories depending on your post format and then creating a new markdown file.

From there you have to add a bunch front matter that describes your post. This is usually specific to your blog requirements but you might have things like title, slug, author, date and so on.

This become tedious and even worse a copy/paste project over and over again which I don't like to do. In fact anytime I catch myself copying/pasting something more then a couple times it's probably time to find a solution to that problem.

In this article I am going to walk you through the blog post generator that I wrote. There have been a few iterations of this script and I have definitely learned a few tricks from others who have done something similar.

## Creating & Initializing the Script

The first thing you need to decide is where is this script going to go. There really is no wrong or right answer so for me, I just created a folder off of my root called scripts. I figured this can be a place for random scripts I might need and If I find a better place for them later I can refactor. This, by the way, is something I do every single time I write code, find a fast way to get it done and make it work and make it pretty later on.

The first thing I am going to do is to create a script called `newpost.js` in my scripts folder. Next, we need to how this script is going to be structured. In some cases, we could just write it top down but for this instance, it won't work.

It is common to wrap code in a function and execute that function and there are a few ways that we could do that. We could just write a normal function that contains all of our logic and then call that function at the end of the script to kick things off.

```javascript
function newPost() {
  console.log("create new post...");
}
newPost();
```

If all you're going to do though is call the function there is a better way of approaching this. You can write what's called a Self Executing Function, also referred to as an Immediately Invoked Function Expression or IIFE. To accomplish that

```javascript
(function newPost() {
  console.log("create new post...");
})();
```

You can also write this using an arrow function

```javascript
(() => {
  console.log("create new post...");
})();
```

And just like any normal function if you're going to be performing an asynchronous task you can use the `async` keyword. In this case we are going to pull in a library to help us write our command line application so we are going to start with the following.

```javascript
(async () => {
  console.log("create new post...");
})();
```

Before you can test this out you need to add a new script to your `package.json`

```javascript
"newpost": "node ./scripts/newpost.js"
```

At this point I would give the script a quick test just to make sure everything is working as expected.

```bash
npm run newpost
```

## Accepting user input

Now that you have script ready to go it's time to start building out some functionality. The first thing you need to do is to ask for some details about the new post. This is obviously going to be different for everyone based on your needs but here are the pieces of data I want to ask for and the pieces of data I can infer.

- Title
- Excerpt
- Tags

These are a list of items that I can determine based off of what the user entered for above or when the script was run.

- slug
- Date
- Author

And that is really all I need to get started. As I said before this might be different for you but you can adjust accordingly.

### inquirer

To help with asking for user input we are going to [install the package inquirer](https://www.npmjs.com/package/inquirer). Inquirer is a collection of common interactive command line user interfaces. Inquirer should ease the process of:

- providing *error feedback*
- _asking questions_
- *parsing* input
- *validating* answers
- managing *hierarchical prompts*

To get started you can install it as a dev dependency by running the following command:

```bash
npm install -D inquirer
```

and require it in your script

```javascript
const inquirer = require("inquirer");
```

This package can do at lot more than we will use it for so if you have a chance [check out the documentation](https://www.npmjs.com/package/inquirer). The first thing you need to do is ask for the process arguments.

```javascript
const args = process.argv;
```

> The process.argv property returns an array containing the command line arguments passed when the Node.js process was launched. The first element will be process.execPath. See process.argv0 if access to the original value of argv[0] is needed. The second element will be the path to the JavaScript file being executed. The remaining elements will be any additional command line arguments.

If you wanted to you could check for the existence of user supplied arguments and take those in but in this example I am going to say as long as there are no custom arguments let's ask the user for some data.

```javascript
if (args.length < 3) {
  const { title, excerpt, tags } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Post Title:"
    },
    {
      type: "input",
      name: "excerpt",
      message: "Post Excerpt:"
    },
    {
      type: "input",
      name: "tags",
      message: "Tags (comma separated):"
    }
  ]);
} else {
  log(error("Please don't provide any arguments to the new post generator"));
}
```

We will talk about the log line in a bit but for now let's focus on inquirer. When we were setting up the script I said that we needed to mark the self executing function as async and this is why. `inquirer.prompt` returns a promise so we will use await here.

We are asking for 3 different pieces of data from the user

- title
- excerpt
- tags

We could have just created a single variable to hold the responses but instead we are destructuring the responses into 3 variables.

```javascript
const { title, excerpt, tags } = ...
```

Each object in the array argument supplied to the prompt method is a Question. In our example we are asking for simple input, defining the name of the question and what the message should display to the user. Again these can get much more complex so check out the documentation if you have more specific needs.

Now that we have the answers from our user we can use those to build out our new post.

## Creating the post directory

Before we start to create any folder or files you need to do a little more setup.

### Post Slug

Now that I have the title of the post I need to create a slug. A slug is a URL friendly version of my title that helps when it comes to SEO. If the title of my post was 'My First Post' a slug would be 'my-first-post'.

Now in this simple example this is something we could probably handle on our own but this can get pretty complex. For this, I am going to install in a [package called slugify](https://www.npmjs.com/package/slugify), require it and then create a slug.

```javascript
const slugify = require("slugify");

const slug = slugify(title);
```

### Folder & URL Format

Each of my blog posts use the following format

```html
https://www.danvega.dev/{year}/{month}/{day}/{slug}
```

So far we have the slug but now I need to extract some parts for the date. Since we are running the generator right now I am going to assume we want to post this today and use that as the basis for our date. You would think this would be easier but working with dates is one of those things that never seems easy in any language.

```javascript
const createdOn = new Date();
const year = createdOn.getFullYear();
const month = `${createdOn.getMonth() + 1 < 10 ? "0" : ""}${createdOn.getMonth() + 1}`;
const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`;
```

Now that we have our date parts we can create a variable called `blogPostFolder` that will be a path to the folder where the new markdown file will be created.

```javascript
const blogPostFolder = `./blog/${year}/${month}/${day}`;
```

And finally I am just going to clean up the tags and turn them into a list.

```javascript
const tagsList = tags.split(",").map(t => t.trim());
```

## Creating Files & Folders

Now that you have all the variables in place it's time to start creating some files and folders. To do so you need to require the [File System Module](https://nodejs.org/api/fs.html).

```javascript
const fs = require("fs");
```

### Creating Recursive Directories in node

We already created a variable for our blog post folder location so let's start there. The first thing you will want to do is to check to see if it already exists because if it does we don't need to create it. This will almost never be the case for me because It is hard enough for me to crank out 1 per week but let's play it safe in case I get ambitious one day.

```javascript
if (!fs.existsSync(blogPostFolder)) {
  // create directory
}
```

This is the tricky part that can trip some people up and indeed got me the first time. If you're just creating a single directory [mkdirSync](https://nodejs.org/api/fs.html#fs_fs_mkdirsync_path_options) with no options will work just fine. What I mean by that is let's say that you already have the folder `blog/2019/04/` created and you just needed to create the day `24` folder than this will work fine. If you need to recursively (more than 1 level deep) create folders you need to pass an option to the `mkdirSync` method. I [wrote an article](https://www.danvega.dev/blog/2019/02/20/node-recursive-directories) that goes a little more into this if you're interested.

```javascript
if (!fs.existsSync(blogPostFolder)) {
  fs.mkdirSync(blogPostFolder, {
    recursive: true
  });
}
```

### Front Matter

In each Markdown file, we define the blog post using something called front matter. These are variables inside of a YAML declaration block

```javascript
---
key: value
---
```

To help us create the front matter we are going to bring in a package called [json-to-pretty-yaml](https://www.npmjs.com/package/json-to-pretty-yaml).

```javascript
const jsToYaml = require("json-to-pretty-yaml");

const yaml = jsToYaml.stringify({
  slug,
  title,
  date: createdOn.toISOString(),
  published: false,
  excerpt: excerpt,
  author: "Dan Vega",
  tags: tagsList,
  cover: ""
});
```

### Markdown

With our front matter in place it's time to create our markdown file. I am going to bring in a package called prettier to format our markdown and make it, well, prettier ☺️

```javascript
const prettier = require("prettier");

const markdown = prettier.format(`---\n${yaml}\n---\n`, {
  parser: "markdown",
  singleQuote: true
});
```

Now that you have the content for the file all that's left to do is create the file. You will be using the File System module again but this time you will use the `writeFileSync` method. You will write this file to the blog post folder that you created earlier and the slug will be the name of the file with the file extension `md`.

```javascript
fs.writeFileSync(`${blogPostFolder}/${slug}.md`, markdown);

log(success(`Post ${title} was created successfully`));
```

## Logging

To add some styling to my terminal logging I am using a [package called chalk](https://www.npmjs.com/package/chalk). To install it locally run the following command:

```bash
npm install -D chalk
```

And then add the following variable declarations to the top of your script.

```javascript
const chalk = require("chalk");
const log = console.log;
const error = chalk.bold.red;
const success = chalk.bold.green.inverse;
```

This allows me to write the following statements when I want to log errors or success and have some stylish log statements.

```javascript
log(success(`Post ${title} was created successfully`));
log(error("Please don't provide any arguments to the new post generator"));
```

## Conclusion

The plan here was to show you exactly how to create your own blog post generator but I hope you learned something more here. When you're building out projects like this and you find that you need something you can just create it yourself.

If you have written something similar or solved a problem for your project I would love to hear about it. If you want to check out the src for my blog post generator along with the code for my entire website [you can check it out here](https://github.com/danvega/danvega-dev/blob/master/scripts/newpost.js).

FYI - I created the post you are reading using this exact script 🤯
