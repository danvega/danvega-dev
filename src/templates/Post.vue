<template>
  <Layout>
    <div class="article content">
      <h1 class="title is-2 article-title">{{ $page.post.title }}</h1>
      <small class="about">January 27, 2019 • ☕️ {{ $page.post.timeToRead }} min read</small>
      <g-image v-if="$page.post.cover" :src="$page.post.cover" />
      <article v-html="$page.post.content" class="article"/>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    timeToRead,
    tags,
    cover
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

<style>
.article-title {
  margin-bottom:0px !important;
}

</style>
