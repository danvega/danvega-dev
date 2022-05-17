<template>
  <Layout>
    <div>
      <h1>{{ $page.newsletter.title }}</h1>
      <small>{{ $page.newsletter.date }} • ☕️ {{ $page.newsletter.timeToRead }} min read</small>
      <article v-html="$page.newsletter.content" class="newsletter" />
    </div>
  </Layout>
</template>

<page-query>
query Newsletter($path:String!) {
  newsletter: newsletter(path:$path) {
    title
    issue
    date(format:"MM/DD/YYYY")
    content
    timeToRead
    path
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.newsletter.title,
      meta: [
        { name: "description", content: this.$page.newsletter.title },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.newsletter.title },
        { name: "twitter:title", content: this.$page.newsletter.title },
        { name: "twitter:site", content: "@therealdanvega" },
        {
          name: "twitter:image",
          content: "https://unsplash.com/photos/ZMraoOybTLQ"
        },
        { name: "twitter:creator", content: "@therealdanvega" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.newsletter.title },
        { property: "og:description", content: this.$page.newsletter.title },
        {
          property: "og:url",
          content: `${this.getBaseUrl}${this.$page.newsletter.path}`
        },
        {
          property: "article:published_time",
          content: this.$page.newsletter.date
        },
        { property: "og:updated_time", content: this.$page.newsletter.date },
        {
          property: "og:image",
          content: "https://unsplash.com/photos/ZMraoOybTLQ"
        },
        {
          property: "og:image:secure_url",
          content: "https://unsplash.com/photos/ZMraoOybTLQ"
        }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
    };
  },
  computed: {
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL == undefined ? "http://www.danvega.dev" : process.env.GRIDSOME_BASE_URL;
    }
  }
};
</script>

<style>
h1 {
  margin-bottom: 0;
}
.newsletter img {
  max-width: 100%;
}
.shiki-inline {
  background: var(--shiki-inline-background) !important;
  padding: 2px;
  color: var(--shiki-inline-color) !important;
  font-size: 1.1rem;
}
code {
  font-family: hack, sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
}
.shiki {
  padding: 1rem;
}
</style>
