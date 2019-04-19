---
slug: "npm-scripts-parallel"
title: "How to run multiple npm scripts in parallel"
date: "2019-04-19T16:51:56.537Z"
published: false
excerpt: "In this article I will talk about a problem I ran into recently and a couple of the solutions I found."
author: "Dan Vega"
tags: ["npm", "node", "javascript"]
cover: ./npm-parallel-cover.png
---

I was working on an exercise for [our students](https://www.techelevator.com) and In the process I learned something new. When our students finish their exercises they are asked to run some tests to validate that their solution works. We also use these tests as a way to grade certain exercises.

The problem is that I needed to run some end to end tests using [Cypress](http://www.cypress.io) but before doing so I needed the project to be running. In some of our vanilla JavaScript examples you can run the them right from Visual Studio Code using the [Live Server Extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

This works for development but about when it comes time to test? I suppose the instructions for the exercise could state "make sure your project is running before running the tests" but this introduces a couple of problems.

First, if we do it this way I'm not sure we can always assume that the project will be running at http://localhost:5500/my-project. That might be the case for most but I never like to just assume it. I could probably stick this in some configuration but again it doesn't feel right to me.

Second, what happens we want to grade our students exercises? This would mean that our instructors would have to start each project, run the test and record their score. This is a very a very tedious workflow and something we want to avoid. We would also want this automated in case we run everything through some continuous integration build.

## Creating a new project

If you want to follow along you can create your own project but it isn't necessary. This article will assume you have some experience building modern web applications. To get started create a new folder and create a new package.json by running the command `npm -y`.

### Cypress

We won't be getting into what Cypress is but if you haven't heard of it or had a chance to play around with it I highly suggest [checking it out](https://www.cypress.io/). You can install cypress using the following command:

```bash
npm install -D cypress
```

Installing Cypress gives you access to some command line tools like the ability to run a headless version of the tests or to open them up in chrome.

```bash
./node_modules/.bin/cypress open
```

With that we can add a new test to our scripts section in our package.json

```bash
"test:e2e": "./node_modules/.bin/cypress open"
```

**Running Cypress Tests in VueJS**

When working in a framework like VueJS the framework solves this problem for us. You can write end to end tests using Cypress and when you're ready to test you just run the command

```bash
npm run test:e2e
```

This will start the application up and then run the cypress integration tests. When the tests are finished you get the test results and the application is shut down. This is the preferred workflow and something we will try and mimic.

### Http Server

An easy solution to the problem of asking everyone to run the project manually is to install a small http server. You can do some searching and find one that fits your needs but for us [http-server](https://www.npmjs.com/package/http-server) was tiny and fast, 2 qualities we were looking for. You can install this globally but for this demo we will just install it as a dev dependency by running the following command:

```bash
npm install -D http-server
```

Now that you have it installed you can add a new script to start your http server.

```bash
"start": "./node_modules/.bin/http-server"
```

## Running your npm scripts in parallel

Now that you have both of scripts created you need to find a way to run them both. In the first iteration of the exercise I asked the students to run both of them. This meant that in Visual Studio Code you need to open up a terminal, run `npm run start` and then open up a new terminal instance and run `npm run test:e2e`.

This isn't a huge deal but when you're introducing new concepts to someone you want to remove as much friction as possible. The point of this exercise was not how to run multiple scripts it was to just run the tests to make sure the code they wrote was correct.

I was already aware that I could run 2 scripts one after another using the `&&` operator. This means that If I had 2 scripts the following script would work.

```bash
"scripts": {
  "one": "./node_modules/.bin/one",
  "two": "./node_modules/.bin/two",
  "start": "npm run one && npm run two"
}
```

This works by running the scripts sequentially and it also means that the first script has to complete before the 2nd script will run. In the case of an HTTP Server it stays running waiting to accept new requests. With the HTTP server never finishing the end to end tests would never run so it was back to the board for me.

After some searching around I did find a couple packages, one of which I will talk about later in this article. I also came across some documentation that said using `&&` will run your scripts sequentially while `&` will run them in parallel.

This was a real mind blown 🤯moment for me. I immediately tried this and it worked which prompted me to send out the following tweet.

[https://twitter.com/therealdanvega/status/1116403685452668928](https://twitter.com/therealdanvega/status/1116403685452668928)

I got a lot of responses and most of them were similar to my reaction which was wow, I didn't know it could do that. I did have a couple though that spoiled my party and and asked about Windows.

## What about windows Dan?

I am primarily mac user but I do have bootcamp on my mac so that I can jump into Windows when need be. When people started asking me about this my initial thought was this probably isn't going to work on Windows. Sure enough after a quick test, this actually doesn't work on Windows because cmd.exe doesn't support it.

No worries though as there is still a cross platform solution to this problem. I did some more searching around and came across a few npm packages that looked like they would work. I ended up installing [npm-run-all](https://www.npmjs.com/package/npm-run-all) which worked out great.

```bash
npm install -D npm-run-all

"start": "./node_modules/.bin/http-server",
"cypress": "./node_modules/.bin/cypress run",
"test": "npm-run-all -p start cypress"
```

According to some people much smarter than me this is probably a safer route than using `&` which I don't quite understand but sounds good to me.

## Conclusion

I feel so lucky to be in a position where I get to learn something every single day. This was one of those days though where I was genuinely excited to learn about the single ampersand `&` operator. If you have learned something lately that warrants the head exploding 🤯emoji please [reach out to me on twitter](https://twitter.com/therealdanvega) because I would love to hear about it. As always....

Happy Coding</br>
Dan
