<template>
  <Layout>
    <div class="content">
      <h1 class="title is-2">Recent Articles by tag</h1>
      <p>
        This is a list of blog articles with the tag
        <span class="tag-title">{{ $page.tag.title }}</span>
      </p>
      <div class="articles">
        <div v-for="{ node } in $page.tag.belongsTo.edges" :key="node.id" class="article content">
          <h2 class="title is-4">
            <g-link :to="node.path">{{node.title}}</g-link>
          </h2>
          <small>{{ new Date(node.date).toLocaleDateString() }} • ☕️ {{node.timeToRead}} min read</small>
          <p v-if="node.excerpt">{{node.excerpt}}</p>
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Tag($id: String!) {
  tag (id: $id) {
    title
    belongsTo {
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Post {
            id
            title
            date (format: "DD/MM/YYYY")
            excerpt
            path
          }
        }
      }
    }
  }
}
</page-query>

<style>
.articles {
  margin: 20px 0;
}
.article h2 {
  margin-bottom: 0px !important;
}
.article h2 a:link,
.article h2 a:visited {
  color: #3273dc;
}
.tag-title {
  color: #3273dc;
  display: inline;
}
</style>
