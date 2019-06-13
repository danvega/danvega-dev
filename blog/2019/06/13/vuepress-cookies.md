---
slug: 'vuepress-cookies'
title: 'How to use cookies in VuePress'
date: '2019-06-13T10:27:46.175Z'
published: false
excerpt: 'In this article, I am going to talk about a recent documentation site to VuePress and how I was able to solve a problem I ran across.'
author: 'Dan Vega'
tags: ['vue','vuepress']
cover: ./vuepress-cookies-cover.png
---

Lately, I have been working on a large migration of documentation from Gitbook to VuePress. If you're curious about how to get started with VuePress or the process I used to determine if it would work for us please reach out to me and let me know.

This article is going to assume you have some experience working with VuePress so we can skip over some getting started stuff and move right into the problem at hand. We are going to cover this in detail but in short, we are going to learn How to use cookies in VuePress.

I had a few requirements that I needed to make sure VuePress could handle. In this article, I am going to talk about one of those requirements, the problems I ran into and how I eventually solved it.

## Gitbook Migration

Before we dive into some code we need to talk about the requirements and the problems I ran into. In the current version of the documentation we actually built multiple versions based on the programming language. We might have a concept that we explain and then show off code sample in any number of languages.

In Gitbook you can create a variable, set a default and then use that variable within your markdown templates like this:

~~~markdown
{% if book.language === "JavaScript" %}

```js
class Greeter {
  constructor(message) {
    this.message = message;
  }
  greet() {
    return `Hello, ${this.message}`;
  }
}
```

{% elif book.language === 'TypeScript' %}

```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```

{% endif %}
~~~

When you visited the generated HTML we would only show the version you were interested in seeing. This could have been solved using tabs but there were cases where we conditionally would show entire sections so it wasn't just code.

When you ran the build you would pass in the language as an argument and build the documentation for that language. This worked but having multiple versions of the same documentation meant slow build times and unneeded duplication in production.

## MMMMMMMMMM Cookies

![](AdobeStock_113771716-12be091c-ec88-49e5-b21f-6fe1a147485c.jpeg)

I don't know about you but when I started thinking about this problem I immediately thought about cookies. This was in part because I was hungry at the time but I also knew this to be a good solution to my problem.

To me this is a visitor preference and something they can change at anytime. Just like the Gitbook solution I would be able to create a default value by dropping a cookie on the users machine the first time they visited the site. Then I would give them the opportunity to change this at anytime.

### Vue Cookies

In my first attempt to solve this problem I brought in a package called `vue-cookies`. I realize that creating a cookie isn't that difficult but having a nice API to manage everything that goes along with cookies is a nice to have. After a quick look at the documentation it looked really easy to setup so I went ahead and added it to my project.

```bash
npm install vue-cookies
```

In a normal Vue application I would jump into `main.js` and add the following.

```js
import Vue from 'vue'
import VueCookies from 'vue-cookies'

// install the plugin
Vue.use(VueCookies)

// we want this cookie to last for 120 days
VueCookies.config('120d')

// set global cookie
VueCookies.set('language','JavaScript');
```

But this is VuePress and I don't have a `main.js` so how can I hook into the existing Vue instance?

### App Level Enhancements

Since the VuePress app is a standard Vue app, you can apply app-level enhancements by creating a file `.vuepress/enhanceApp.js`, which will be imported into the app if it is present. The file should export default a hook function which will receive an object containing some app level values. You can use this hook to install additional Vue plugins, register global components, or add additional router hooks:

```js
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
}
```

[https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements](https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements)

This sounds exactly like what I needed so I quickly setup `.vuepress/enhance.App.js` and added the following code. This allows me to call `Vue.use()` to install the plugin and set a default cookie if one doesn't exist.

```js
import VueCookies from 'vue-cookies'

export default ({ Vue, options, router, siteData }) => {

  Vue.use(VueCookies)
  VueCookies.config('120d')
  if( !$cookies.isKey('language') ) {
    VueCookies.set('language','JavaScript');
  }

}
```

This actually worked out really well and I was really happy with the solution. That was, until I went to build a production version of the documentation as a test. When I ran `vuepress build` I started getting some errors saying that window was not defined and I knew right away that I forgot about an important detail.

### Browser API Restrictions

Because VuePress applications are server-rendered in Node.js when generating static builds, any Vue usage must conform to the [universal code requirements](https://ssr.vuejs.org/en/universal.html). In short, make sure to only access Browser / DOM APIs in beforeMount or mounted hooks.

In order to use code that assumes a browser environment on import, you need to dynamically import them in proper lifecycle hooks:

```js
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```

[https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions](https://v1.vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions)

Armed with this knowledge I tried to hack a few things together but fell flat on my face. After banging my head against the desk a few more times I realized that I needed to look at this from a different angle so it was back to the drawing board for me.

### Rethinking the Solution

When I started to think about the problem more I realized that I only needed a script to run once when the application loads for the visitor. At that point I can check to see if there is a cookie and if there isn't, create a default one. From there I can always give the user the option to change the language from another page.

So now the question was how could I add a script to the application where I could perform this logic. I remember from earlier that in `.vuepress/config.js` I was adding a favicon to the site using the following code. I did some digging around and sure enough I could push a script here as well by dropping it into the `.vuepress/public/scripts` folder.

```js
head: [
  ['link', { rel: 'icon', href: '/favicon.png' }],
  ['script', { src: '/scripts/cookies.js' }]
],
```

A VuePress application is a single page application so this was only going to run once. Every subsequent request was loaded through the app so this script would only be called once. This was actually ok for this problem so I continued on and built a small cookie script.

```js
document.addEventListener("DOMContentLoaded", () => {

  // if a cookie has not been defined and they aren't on the language selection page
  if( !cookieExists('language') && window.location.pathname != '/language.html' ) {
    // a cookie doesn't exist yet, we need to create one with a default language.
    document.cookie = `language=javascript;max-age=${60*60*24*120};path=/`;
    // we are setting a default cookie but we still want the visitor to have a chance to change it
    window.location.href="/language.html";
  }

})

function cookieExists(name) {
  return document.cookie.split(';').filter((item) => item.trim().startsWith(`${name}=`)).length;
}
```

The script will check to see if the cookie exists and if it doesn't it will create a default one and forward you on the language selection page. This is nothing more than a simple markdown page with some copy and a custom component I built to change the cookie value.

```html
<template>
  <div class="language">
    <p>Current Language: {{ currentLanguage }}</p>

    <select @change="updateLanguage($event)">
      <option value="">Change Language</option>
      <option value="javascript">JavaScript</option>
      <option value="typescript">TypeScript</option>
    </select>

  </div>
</template>

<script>
export default {
  name: 'language-select',
  data() {
    return {
      languages: [
        { label: 'JavaScript', value: 'javascript' },
        { lagel: 'TypeScript', value: 'typescript' }
      ],
      currentLanguage: ''
    }
  },
  methods: {
    updateLanguage(event) {
      const language = event.target.value;
      this.setCookie(language);
      this.currentLanguage = language;
    },
    setCookie(value) {
      document.cookie = `language=${value};max-age=${60*60*24*120};path=/`;
    },
    getCookie() {
      return document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    },
  },
  mounted() {
    this.currentLanguage = this.getCookie();
  }
}
</script>
```

## Custom Component to read cookie

Now that everything was in place I needed a way to conditionally check in markdown what language the user was set to. It might make sense to start with the component but I like to start with what I want my markup to look like. If I am in markdown and I want to only display the following code if the user's language selection is TypeScript I would envision writing the following markup.

~~~markdown
<code-block langugage="typescript">
```ts
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
```
</code-block>
~~~

This allows me to write code in normal markdown code fences which makes me happy. To pass whatever is between the component tags you can use a slot and I can use a variable to determine if I should display the content or not. The last piece of the puzzle is to read the cookie value and we can do that in the mounted method because we know at that point the DOM is available. If you create `.vuepress/components/CodeBlock.vue` with the following the code above should work.

```html
<template>
  <div class="code-block">
    <slot v-if="display"/>
  </div>
</template>

<script>
export default {
  name: 'code-block',
  props: {
    language: String
  },
  data() {
    return {
      display: false
    }
  },
  methods: {
    getCookie() {
      return document.cookie.replace(/(?:(?:^|.*;\s*)language\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    },
  },
  mounted() {
    const cookieValue = this.getCookie();
    this.display = cookieValue === this.language;
  }
}
</script>
```

## Conclusion

I have been writing code a long time so usually when I come across a problem it's one that I have solved over and over again. The idea of static site generators combining the client and server presents problems that I haven't run into before and that is exciting. If you have a better solution for this I would love to hear about it. I hope someone else got something from this article and as always friends....

Happy Coding<br/>
Dan
