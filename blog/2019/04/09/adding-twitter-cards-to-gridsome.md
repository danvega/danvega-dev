---
slug: "adding-twitter-cards-to-gridsome"
title: "Adding Twitter Cards to Gridsome"
date: "2019-04-09T19:21:53.368Z"
published: false
excerpt: In this tutorial I will show you how to add Twitter Cards to your Gridsome Blog.
author: Dan Vega
tags: ["vue", "gridsome"]
cover: ./twittter-cards-gridsome-cover-936ee6d4-220e-4800-873c-9d700fa44469.png
---

In a [previous article](https://www.danvega.dev/blog), I showed you how you could add Twitter Cards to your blog. If you haven't gone through that post yet I would suggest doing so before reading this one.

In this article, I am going to show you how to add Twitter Cards to your Gridsome Blog. This is not only for Twitter cards but more of a general example on adding meta tags to your blog posts.

## Blog Posts in Gridsome

I am going to make an assumption with this article that you have at least played around with Gridsome. If you're looking for a begginers guide to Gridsome I have one coming but give me a shout out on Twitter and let me know that you're interested in it.

In my `gridsome.config.js` I have defined the @gridsome/source-filesystem plugin and the key part here is the type name. This is the GraphQL type and template name. A .vue file in src/templates must match the typeName to have a template for it.

```javascript
plugins: [{
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:year/:month/:day/:slug',
```

If we look at the Post template the first thing you will see is the markup for each blog post. Again this is a single blog post, there is a separate template for the page that lists posts.

```html
<Layout>
  <div class="article content">
    <h1 class="title is-2 article-title">{{ $page.post.title }}</h1>
    <small class="about">{{ formatCreatedOn }} • ☕️ {{ $page.post.timeToRead }} min read</small>
    <g-image v-if="$page.post.cover" :src="$page.post.cover" class="cover"/>
    <article v-html="$page.post.content" class="article"/>
    <convert-kit uid="44cc02ed05" script="https://f.convertkit.com/44cc02ed05/38739557e4.js"></convert-kit>
  </div>
  <bulma-tag :tags="$page.post.tags"/>
</Layout>
```

This is all of the content for this blog post, so where is that coming from? If you look below the markup there is a GraphQL page query that pulls the information for this post based on the path.

```javascript
<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    timeToRead
    cover
    slug
    date
    excerpt
    tags {
      id
      title
      path
    }
  }
}
</page-query>
```

Now that you are all caught up let's jump in to how we can create a Twitter card for each blog post.

## Gridsome Meta Tags

If you [read my previous article](https://www.danvega.dev/blog/2019/02/18/twitter-cards-meta-tags) you know that it isn't that hard to create a twitter card. All we need to do is add some meta tags that end up looking something like this.

```html
<head>
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:description" content="How to create your first npm package and publish it."/>
  <meta name="twitter:title" content="Creating your first npm package" />
  <meta name="twitter:site" content="@therealdanvega" />
  <meta name="twitter:image" content="https://www.danvega.me/assets/static/npm_cover.bd64798.eced3da.png"/>
  <meta name="twitter:creator" content="@therealdanvega" />
</head>
```

The challenge here is that you want each blog post to generate tags specific to that article. Fortunately for us Gridsome gives us a really easy way to populate metadata in our components. All you need to do is add the `metaInfo` object to your components script section.

```javascript
<script>
export default {
  name: 'About',
  metaInfo: {
    title: 'About us',
    meta: [
      { name: 'author', content: 'John Doe' }
    ],
    link: [
      { rel: 'stylesheet', href: '/css/index.css' },
    ]
    // etc...
  }
}
</script>
```

*Under the hood Gridsome uses [Vue Meta](https://github.com/nuxt/vue-meta) if you're interested in learning how it works.*

In the metaInfo object you can define the following properties.

| Property      | Description        |
| ------------- | ------------------ |
| style         | Adds a style tag   |
| script        | Adds a script tag  |
| meta          | Adds a meta tag    |
| title         | Changes title text |
| titleTemplate | Dynamic title text |
| link          | Adds a link tag    |

## Gridsome Meta Tags

If you notice one of the properties in the `metaInfo` object that you can add is `meta`. This will allow us to create a meta tag using the following format:

```javascript
metaInfo: {
  return {
    title: this.$page.post.title,
    meta: [
      { name: 'META_NAME_HERE' content: 'META_CONTENT_HERE' }
    ],
  };
},
```

With that you have everything you need to create your meta tags. In the following snippet I am creating a description meta tag and each of the tags that I need for my Twitter card. For each of the tags I am populating the content with data from the post that we are on. The script property that I am adding is the Twitter API that we need to include for the cards to work.

```javascript
metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "description", content: this.$page.post.excerpt },
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.excerpt },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@therealdanvega" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@therealdanvega" }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
```

For more information on what each of these meta tags do you can check out the [Twitter Cards Documentation](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/guides/getting-started.html). This will produce html in your head that looks like this

```html
  <head>
    <title data-vue-tag="true">How to add Twitter Card Meta Tags to your Blog - Dan Vega</title>
    <meta data-vue-tag="true" charset="utf-8" />
    <meta data-vue-tag="true" name="generator" content="Gridsome v0.5.0" />
    <meta data-vue-tag="true" data-key="viewport" name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta data-vue-tag="true" data-key="description" name="description" content="Person blog of Dan Vega" />
    <meta data-vue-tag="true" data-key="format-detection" name="format-detection" content="telephone=no" />
    <meta data-vue-tag="true" name="description" content="In this tutorial you will learn what a Twitter Card is along with step by step instructions how to add them to your blog and validate that they are working." />
    <meta data-vue-tag="true" name="twitter:card" content="summary_large_image" />
    <meta data-vue-tag="true" name="twitter:description" content="In this tutorial you will learn what a Twitter Card is along with step by step instructions how to add them to your blog and validate that they are working." />
    <meta data-vue-tag="true" name="twitter:title" content="How to add Twitter Card Meta Tags to your Blog" />
    <meta data-vue-tag="true" name="twitter:site" content="@therealdanvega" />
    <meta data-vue-tag="true" name="twitter:image" content="https://www.danvega.dev/assets/static/twitter-cards.bd64798.89214ec.png" />
    <meta data-vue-tag="true" name="twitter:creator" content="@therealdanvega" />
    <script data-vue-tag="true" src="https://platform.twitter.com/widgets.js" async="true"></script>
  </head>
```

And this is an example of what a card might look like

![](./2019-04-09_14-22-55-7de0bfb4-6ad0-4bd0-bf31-d2e9092d37ca.png)

## Conclusion

Twitter cards add a really nice touch to sharing your articles on Twitter. Tweets with an image will get more impressions and clicks than tweets without one so what are you waiting for? If you're interested in seeing the code for my entire Gridsome blog you can [check it out here](https://github.com/danvega/danvega-dev).
