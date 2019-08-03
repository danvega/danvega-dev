<template>
  <Layout>
    <div class="newsletter content">
      <h1 class="title is-2 title">{{ $page.newsletter.title }}</h1>
      <small>{{ $page.newsletter.date }} • ☕️ {{ $page.newsletter.timeToRead }} min read</small>
      <article v-html="$page.newsletter.content" class="newsletter" />
    </div>
  </Layout>
</template>

<page-query>
query Newsletter($path:String!){
  newsletter:newsletter(path:$path){
    title
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
      return process.env.GRIDSOME_BASE_URL;
    }
  }
};
</script>

<style scoped>
.newsletter {
  margin-top: 20px;
}
.newsletter h2 {
  margin: 20px 0 10px 0 !important;
}
.title {
  margin-bottom: 0px !important;
}
</style>
