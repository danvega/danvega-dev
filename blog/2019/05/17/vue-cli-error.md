---
slug: 'vue-cli-validation-error'
title: 'Vue CLI ValidationError: webpack Dev Server Invalid Options'
date: '2019-05-17T15:25:36.871Z'
published: false
excerpt: 'In this article, I will tell you about an error I received while trying to run and new VueJS project this morning and how I was able to fix it.'
author: 'Dan Vega'
tags: ['vue','npm','nodejs','javascript']
cover: ./vue-cli-validation-error.png
time: '1 hour'
---

This morning I ran into an issue creating a new Vue project using the Vue CLI. The strange thing about this is that I just created a new project yesterday and it ran fine. I did some digging around and this seems to be affecting a lot of users so I figured I would throw together a quick post about.

## Creating & Running a new VueJS Project

I started out my morning with creating a new project using the [Vue CLI](https://cli.vuejs.org/). After I created the project I changed into that directory and typed the command `npm run serve` which calls `vue-cli-service serve`. A few seconds after trying to startup I received the following error in the terminal.

``` bash
 INFO  Starting development server...
 ERROR  ValidationError: webpack Dev Server Invalid Options

options.clientLogLevel should be {String} and equal to one of the allowed values

 [ 'info', 'warn', 'error', 'debug', 'trace', 'silent' ]

 (https://webpack.js.org/configuration/dev-server/#devserverclientloglevel)

ValidationError: webpack Dev Server Invalid Options

options.clientLogLevel should be {String} and equal to one of the allowed values

 [ 'info', 'warn', 'error', 'debug', 'trace', 'silent' ]

 (https://webpack.js.org/configuration/dev-server/#devserverclientloglevel)

    at validateOptions (/Users/vega/dev/vue/hello-vue-cli/node_modules/schema-utils/src/validateOptions.js:32:11)
    at new Server (/Users/vega/dev/vue/hello-vue-cli/node_modules/webpack-dev-server/lib/Server.js:71:5)
    at serve (/Users/vega/dev/vue/hello-vue-cli/node_modules/@vue/cli-service/lib/commands/serve.js:138:20)
    at process._tickCallback (internal/process/next_tick.js:68:7)
    at Function.Module.runMain (internal/modules/cjs/loader.js:745:11)
    at startup (internal/bootstrap/node.js:283:19)
    at bootstrapNodeJSCore (internal/bootstrap/node.js:743:3)
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! hello-vue-cli@0.1.0 serve: `vue-cli-service serve`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the hello-vue-cli@0.1.0 serve script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/vega/.npm/_logs/2019-05-17T15_05_54_552Z-debug.log
```

I checked the version of the Vue CLI by running the command `vue -V` and I was [running the latest 3.7.0](https://github.com/vuejs/vue-cli/releases). I thought maybe I did something wrong so removed the project by running `rm -Rf hello-vue-cli` and tried again only to run into the same error.

I next wondered if this was affecting all of my projects or just new ones. I went into an existing project I had and ran `npm run serve` and it started up just fine. This was adding to my head scratching because I didn't update NodeJS, NPM or Vue this morning so what the heck was going on.

## Vue CLI Issues on Github

At this point I was pretty confused so my next step was to head over to [Github](https://github.com/vuejs/vue-cli/issues) and see if anyone else was seeing similar issues. Sure enough the first 2 posts looked very similar to what I was experiencing.

Shout out to [dland512](https://github.com/vuejs/vue-cli/issues/4017#issuecomment-493481614) for providing some clarity as to what was happening. It appears that the problem is with the generated webpack configuration `node_modules/@vue/cli-service/lib/commands/serve.js` which has the following:

```javascript
const server = new WebpackDevServer(compiler, Object.assign({
      clientLogLevel: 'none',
```

If you look back at the original error it said:

```bash
ValidationError: webpack Dev Server Invalid Options

options.clientLogLevel should be {String} and equal to one of the allowed values

 [ 'info', 'warn', 'error', 'debug', 'trace', 'silent' ]
```

Still not sure what has caused this but it could be the `vue-cli-service` itself. There workaround is to create a new file in the root of your project `vue.config.js` that contains the following:

```javascript
module.exports = {
    devServer: {
        clientLogLevel: 'info'
    }
};
```

After adding this configuration I was able to run the project with no errors. If you want to read more about the Vue CLI global configuration you can check out the [documentation here](https://cli.vuejs.org/config/#global-cli-config).

## Conclusion

I am guessing by the time this article gets indexed it will no longer be an issue but I thought it was important to write up. This is one of those errors that would have completely derailed a day or even a week for me 15 years ago. With experience and a lot of patience I have learned how to deal with issues like this that will ultimately come up. I hope this article either fixed this issue for you or just gave you some insight into my thought process of working through a frustrating issue. As always ...

Happy Coding<br/>
Dan



