---
slug: creating-your-first-npm-package
title: Creating your first npm package
date: 2019-02-10 11:00:00
published: true
excerpt: How to create your first npm package and publish it.
author: Dan Vega
tags: ["node", "javascript"]
cover: ./npm_cover.png
---

This weekend I started working on my first ever npm package. I can't believe for how long I have been writing code that I never bothered to create my own npm package but here we are. I [built the site](https://www.danvega.me/blog/hello-gridsome) you're reading this article on using Gridsome and markdown. In the markdown files I wanted an easy way to insert a twitter status nad embed the tweet. In fact here is a tweet just to prove its working.

https://twitter.com/therealdanvega/status/1094219965480292353

I will tell you more about that Gridsome plugin in a future blog post but for now I want to show you how you can create your very first npm package. I learned a few things while working on this and I would like to share them with you.

## Prerequisites

I am going to assume you at least know what node & npm is and have written JavaScript before. If you don't know either of these and want me to write something up on getting started with those please let me know.

There are a few things that you're going to need before we dive in and start writing some code.

- [Visual Studio Code](https://code.visualstudio.com/) or your favorite editor
- [Node & NPM](https://nodejs.org/en/)
- [NPM Account](https://www.npmjs.com/)

## Creating your npm package

The first thing you are going to do is create a new folder to hold your npm package. For this example I am going to create a new directory called **wrap-with-poo**. Yes, you read that correctly.

Go into that folder and type the following:

```bash
npm init
```

This will ask you a bunch of questions and then create a package.json. If you don't know answers to certain questions just yet don't worry, you can come back and answer them later.

```bash
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (wrap-with-poop)
version: (1.0.0) 0.0.1
description: This package will take any string you give it and wrap it with the poop emjoi
entry point: (index.js)
test command:
git repository:
keywords: node,npm
author: Dan Vega
license: (ISC) MIT
About to write to /Users/vega/dev/npm/wrap-with-poop/package.json:

{
  "name": "wrap-with-poop",
  "version": "0.0.1",
  "description": "This package will take any string you give it and wrap it with the poop emjoi",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "npm"
  ],
  "author": "Dan Vega",
  "license": "MIT"
}


Is this OK? (yes) yes
```

## Writing your plugin

Next open this project up in Visual Studio Code and create index.js. The reason you're creating this file is because in your package.json you said that this was your entry point. In your index.js add the following code:

```javascript
module.exports = str => {
  return `💩${str}💩`;
};
```

The module.exports object allows us to organize some related code and then expose it as a module. This means that when we are done we could import this module into another application. In this case we are assigning an arrow function which means we are exposing a single function that takes an argument called str and returns that string wrapped with the poo emoji. That is all you need to do with this project. It is a pretty simple package but it will help walk through a few things.

## npm local development

Now that you have our package ready to go you need to test it in another project. In the real world you should be writing some unit tests against it but I want to save that for another article & screencast.

Next create a new directory (outside of your package) called wrap-with-poo-testing. You will again need to run npm init but this time you can add the -y argument to skip all of the questions, they are less important this time.

```bash
npm init -y

Wrote to /Users/vega/dev/npm/wrap-with-poo/package.json:

{
  "name": "wrap-with-poop",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### NPM Install

In this project create a new file called app.js. This is where you are going to use your new wrap-with-poo package. This is normally where you would normally install the npm package you needed by running the following command.

```bash
npm install wrap-with-poo
```

The problem with this is that you haven't published your new plugin yet so it isn't in npm. You need a way to reference the package locally while your developing it. You could run npm install with the absolute path to the package.

```bash
npm install /Users/vega/dev/npm/wrap-with-poo
```

Which would update your package.json to look like this

```javascript
{
  "name": "npm",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "wrap-with-poo": "file:../wrap-with-poo"
  }
}
```

If you need to test out [pre-install/post-install hooks](https://docs.npmjs.com/misc/scripts) in your package then you will want to use this approach. If you don't care about the best way to develop NPM projects locally is by using [npm link](https://docs.npmjs.com/cli/link.html).

### NPM Link

npm link is a process that allows you to create a symbolic link between your project and the dependency. First you need to move in to the directory wrap-with-poo and run the following command.

```bash
npm link
```

This will take your package and create a symbolic link in the npm global folder to it.

**/Users/vega/.nvm/versions/node/v10.15.0/lib/node_modules/wrap-with-poo -> /Users/vega/dev/npm/wrap-with-poo**

This means that your project can be used in any project with one more simple step. The next thing you need to do is to move into the project wrap-with-poo-testing and run the following command.

```bash
npm link wrap-with-poo
```

This will output the following: **/Users/vega/dev/npm/wrap-with-poo-testing/node_modules/wrap-with-poo -> /Users/vega/.nvm/versions/node/v10.15.0/lib/node_modules/wra
p-with-poo -> /Users/vega/dev/npm/wrap-with-poo**

That is all there is to it, no need to install the dependency. You are ready to begin writing some code to play with you new plugin. Open up the app.js and add the following code.

```javascript
const poo = require("wrap-with-poo");
const boring = "This is a boring string";
const fun = poo(boring);

console.log(fun);
```

And run the following command from the integrated terminal

```javascript
node app.js
```

And you will get the following output

```bash
💩This is a boring string💩
```

## Publish Source Code

Now that we know our project works its time to make it public for everyone to use. If you haven't done so yet I would add your project to Github or whatever source code hosting you prefer.

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/cfaddict/wrap-with-poo.git
git push -u origin master
```

Now that it is on Github go back and add an entry to your package.json so everyone knows where to find the source code using the homepage key.

```javascript
{
  "name": "wrap-with-poo",
  "version": "0.0.1",
  "description": "This package will wrap any string you give it with the poop emoji",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "node",
    "npm",
    "poop"
  ],
  "author": "Dan Vega",
  "license": "MIT",
  "homepage": "https://github.com/cfaddict/wrap-with-poo"
}
```

## Publishing NPM Package

It is now time to publish our project to npm so that anyone can use it. If this is your first time publishing a package open up a terminal in the wrap-with-poo directory and type the following command.

```bash
npm adduser
```

This will ask you for your npm account information such as username, password and email.

```bash
vega wrap-with-poo (master) $ npm adduser
Username: therealdanvega
Password:
Email: (this IS public) danvega@gmail.com
Logged in as therealdanvega on https://registry.npmjs.org/.
```

Now you're ready to publish but there are a couple of things you need to remember. First every npm package must have a unique name. I would head over to [npm](https://www.npmjs.com/) and do a quick search for your package. I have already published the package wrap-with-poo so yours will need a new unique name.

The next thing you need to know is that your version number matters. I start with 0.0.1 and work my way up from there. Once you publish a specific version you can't publish the same version again. It is a good idea to build a number of features into a version and then publish that. If you run

```bash
npm version
```

It will tell you what your current version is.

```javascript
{ 'wrap-with-poo': '0.0.1',
  npm: '6.7.0',
  ares: '1.15.0',
  cldr: '33.1',
  http_parser: '2.8.0',
  icu: '62.1',
  modules: '64',
  napi: '3',
  nghttp2: '1.34.0',
  node: '10.15.0',
  openssl: '1.1.0j',
  tz: '2018e',
  unicode: '11.0',
  uv: '1.23.2',
  v8: '6.8.275.32-node.45',
  zlib: '1.2.11' }
```

If everything looks good you can publish your new project by running

```bash
npm publish
```

This might take a few seconds but if everything went ok your package should now be [live on npm](https://www.npmjs.com/settings/therealdanvega/packages).

Congrats on publishing your first npm package!!!

Now you can go into any project that already has a package.json and type the following

```bash
npm install wrap-with-poo
```

And use it just like we did in our testing example above.

## Documentation

I know some people say that you should create documentation from the beginning but I am not always sure what my code is going to end up looking like so I usually wait on this. Create a README.md in the root of your project and add some information about your project.

- What does your npm package do?
- Why did you create it.
- How do you install it?
- Are there any configuration options?

## Conclusion

As I said at the beginning of this article I can't believe I published my first npm package this weekend. I just never really had a need to do so until now but I was really excited to learn how easy it was. If this is your first npm package please leave me some comments or tweet at me when yours is live!

Happy Coding!<br/>
Dan
