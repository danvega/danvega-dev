<template>
  <Layout>
    <h1>Recent Articles</h1>
    <p>
      I like to write about anything thta I am currently working or something
      new that interests me. If you would like me to write about something or
      be a guest blogger on your blog please reach out to me on
      <a
        href="https://twitter.com/therealdanvega"
      >Twitter</a>.
    </p>
    <p class="popular-tags">
      Most Popular Tags:
      <g-link to="/tag/vue">Vue</g-link>,
      <g-link to="/tag/spring">Spring</g-link>,
      <g-link to="/tag/java">Java</g-link>,
      <g-link to="/tag/groovy">Groovy</g-link>,
      <g-link to="/tag/javascript">JavaScript</g-link>,
      <g-link to="/tag/java">Java</g-link>
    </p>
    <blog-post-list :posts="$page.posts.edges" :page-info="$page.posts.pageInfo" />
  </Layout>
</template>

<page-query>
query Blog ($page: Int) {
  posts: allPost(perPage: 5, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    totalCount
    edges {
      node {
        id
        title
        slug
        excerpt
        cover
        timeToRead
        path
        date
        tags {
          id
          title
          path
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

<style scoped>
.popular-tags {
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
}
</style>
