<template>
  <Layout>
    <div class="articles">
      <div v-for="post in $page.posts.edges" :key="post.node.id" class="article content">
        <h2 class="title is-3">
          <g-link :to="post.node.path">{{post.node.title}}</g-link>
        </h2>
        <small>{{ new Date(post.node.date).toLocaleDateString() }} • ☕️ {{post.node.timeToRead}} min read</small>
        <p v-if="post.node.excerpt">{{post.node.excerpt}}</p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts:allPost{
    totalCount
    edges {
      node {
        id,
        title,
        slug,
        tags,
        excerpt,
        cover,
        timeToRead,
        path,
        date
      }
    }
  }
}
</page-query>

<script>

</script>

<style>
.articles {
  margin: 20px 0;
}
.article h2 {
  margin-bottom:0px !important;
}
</style>
