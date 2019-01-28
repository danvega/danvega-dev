<template>
  <Layout>
    <div class="article content is-medium">
      <h1 class="title is-2 article-title">{{ $page.post.title }}</h1>
      <small class="subtitle">January 27, 2019 • ☕️ {{ $page.post.timeToRead }} min read</small>
      <article v-html="$page.post.content" class="article"/>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    timeToRead
  }
}
</page-query>


<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style scoped>
</style>
