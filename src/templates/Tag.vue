<template>
  <Layout>
    <h1 class="title is-2">Recent Articles by tag</h1>
    <p>
      This is a list of blog articles with the tag:
      <span class="tag-title">{{ $page.tag.title }}</span>
    </p>
    <blog-post-list :posts="$page.tag.belongsTo.edges" :page-info="$page.tag.belongsTo.pageInfo" />
  </Layout>
</template>

<page-query>
query Tag($id: ID!) {
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
            date (format: "MM/DD/YYYY")
            excerpt
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>
import BlogPostList from "@/components/BlogPostList";

export default {
  components: {
    BlogPostList
  }
};
</script>

<style>
.tag-title {
  color: var(--bright-blue);
  font-weight: bold;
}
</style>
