<template>
  <div class="container newsletter">
    <h1>{{ $page.broadcast.title }}</h1>
    <article v-html="$page.broadcast.content" />
  </div>
</template>

<page-query>
query Broadcast($path: String!) {
  broadcast: broadcast(path:$path) {
    id
    path
    title
    slug
    date(format:"MM/DD/YYYY")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.broadcast.title
    };
  }
};
</script>

<style>
body {
  border-top: none !important;
}
</style>

<style scoped>
.newsletter {
  margin: 40px auto;
}
h1 {
  font-size: 2rem;
  line-height: 1.25;
  font-family: "Inter UI Bold", sans-serif;
  font-weight: bold;
  margin: 0px 0px 50px;
  text-align: center;
  font-style: normal !important;
}
article p {
  text-align: left;
  line-height: 1.7;
  margin-bottom: 1.55rem;
  font-family: "Inter UI Regular", sans-serif;
  font-style: normal;
}
</style>
