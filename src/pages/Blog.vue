<template>
  <Layout>
    <div class="articles">
      <h1 class="title is-1">Recent Blog Posts</h1>
      <div v-for="post in $page.posts.edges" :key="post.node.id" class="article content is-medium">
        <h2 class="title is-2 article-title">
          <g-link :to="post.node.path">{{post.node.title}}</g-link>
        </h2>
        <small class="subtitle is-6">{{ new Date(post.node.date).toLocaleDateString() }} • ☕️ 5 min read</small>
        <p>This is a new place for me to write and ramble about anything.</p>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  posts: allPost {
    totalCount
    edges {
      node {
        id
        title
        slug
        path
        date
      }
    }
  }
}
</page-query>

<script>
</script>