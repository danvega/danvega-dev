<template>
  <div class="articles">
    <div v-for="post in posts" :key="post.node.id" class="article">
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
        :currentPage="pageInfo.currentPage"
        :totalPages="pageInfo.totalPages"
        :maxVisibleButtons="5"
        v-if="pageInfo.totalPages > 1"
      />
      <div v-else class="spacer"></div>
    </div>
  </div>
</template>

<script>
import BlogPagination from "@/components/BlogPagination";

export default {
  components: {
    BlogPagination
  },
  props: ["posts", "pageInfo"]
};
</script>

<style>
.article h2 {
  margin: 20px 0 0 0;
  font-size: 1.7rem;
}
.article h2 a:link,
.article h2 a:visited {
  color: #3273dc;
  text-decoration: none;
}
.article p {
  font-family: Roboto Slab;
  font-size: 1.3rem;
  font-weight: 300;
  color: var(--var-text-color);
  color: black;
  line-height: 1.6;
  margin: 8px 0 0 0;
}
.pagination {
  margin: 30px 0;
}
.spacer {
  min-width: 1024px;
  margin-bottom: 40px;
}
</style>
