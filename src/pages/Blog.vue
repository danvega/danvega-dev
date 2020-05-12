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
    <p>
      Most Popular Tags:
      <a href="#">Spring Boot</a>,
      <a href="#">Vue</a>,
      <a href="#">Java</a>,
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
      <BulmaPagination
        baseUrl="/blog"
        :currentPage="$page.posts.pageInfo.currentPage"
        :totalPages="$page.posts.pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="$page.posts.pageInfo.totalPages > 1"
      />
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
import BulmaPagination from "@/components/BulmaPagination";

export default {
  components: {
    BulmaPagination
  }
};
</script>

<style scoped>
.articles h2 {
  margin: 0;
  font-size: 1.7rem;
}
.article h2 a:link,
.article h2 a:visited {
  color: #3273dc;
  text-decoration: none;
}
p {
  font-family: Roboto Slab;
  /* font-size: 22px; */
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--var-text-color);
  color: black;
  line-height: 1.6;
}
</style>
