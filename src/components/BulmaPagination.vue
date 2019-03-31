<template>
  <nav class="pagination" role="navigation" aria-label="pagination">
    <a
      :href="previousPage(currentPage,totalPages)"
      class="pagination-previous"
      :disabled="currentPage == 1"
    >Previous</a>
    <ul class="pagination-list">
      <li v-for="page in pages" :key="page.name">
        <a
<<<<<<< HEAD
<<<<<<< HEAD
          :href="page.link"
=======
          :href="baseUrl + '/' + page.name"
>>>>>>> Fixing pagination to support a lot more pages
=======
          :href="baseUrl + '/' + page.name"
>>>>>>> 3d32c22a8b8afca47ea7a2c8f388d3573d68c979
          class="pagination-link"
          :class="{'is-current': page.name == currentPage}"
          :aria-label="page.name"
          :aria-current="page"
        >{{page.name}}</a>
      </li>
    </ul>
    <a
      :href="nextPage(currentPage,totalPages)"
      class="pagination-next"
      :disabled="currentPage == totalPages"
    >Next page</a>
  </nav>
</template>

<script>
export default {
  props: {
    baseUrl: String,
    currentPage: Number,
    totalPages: Number,
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 3
    }
  },
  methods: {
    nextPage(currentPage, totalPages) {
      return `${this.baseUrl}/${currentPage + 1}`;
    },
    previousPage(currentPage, totalPages) {
<<<<<<< HEAD
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`;
=======
      return `${this.baseUrl}/${currentPage - 1}`;
>>>>>>> 3d32c22a8b8afca47ea7a2c8f388d3573d68c979
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.currentPage - 1;
      }

      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
        let i = this.startPage;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
        i += 1
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
          link: i === 1 ? `${this.baseUrl}/` : `${this.baseUrl}/${i}`
        });
      }

      return range;
    }
  }
};
</script>

<style>
.pagination-list {
  margin-left: 0px !important;
}
.pagination-list li {
  list-style-type: none;
}
.is-current {
  background-color: #ff4e46 !important;
  border-color: #ff4e46 !important;
}
</style>