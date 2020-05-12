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
    <div class="articles">
      <div v-for="post in $page.posts.edges" :key="post.node.id" class="article content">
        <h2>
          <g-link :to="post.node.path">{{ post.node.title }}</g-link>
        </h2>
        <small>
          {{ new Date(post.node.date).toLocaleDateString() }} • ☕️
          {{ post.node.timeToRead }} min read
        </small>
        <p v-if="post.node.excerpt">{{ post.node.excerpt }}</p>
      </div>
      <div class="pagingation">
        <BlogPagination
          baseUrl="/blog"
          :currentPage="$page.posts.pageInfo.currentPage"
          :totalPages="$page.posts.pageInfo.totalPages"
          :maxVisibleButtons="5"
          v-if="$page.posts.pageInfo.totalPages > 1"
        />
      </div>
    </div>
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
import BlogPagination from "@/components/BlogPagination";

export default {
  components: {
    BlogPagination
  }
};
</script>

<style scoped>
.article h2 {
  margin: 20px 0 0 0;
  font-size: 1.7rem;
}
.article h2 a:link,
.article h2 a:visited {
  color: #3273dc;
  text-decoration: none;
}
p {
  font-family: Roboto Slab;
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--var-text-color);
  color: black;
  line-height: 1.6;
  margin: 8px 0 0 0;
}
.popular-tags {
  padding-bottom: 5px;
  border-bottom: 1px solid lightgray;
}
.pagination {
  margin: 30px 0;
}
</style>
