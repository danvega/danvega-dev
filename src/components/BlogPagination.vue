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
          :href="page.link"
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
      return currentPage === 2
        ? `${this.baseUrl}/`
        : `${this.baseUrl}/${currentPage - 1}`;
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

<style scoped>
nav {
  display: flex;
  align-items: center;
}
nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}
nav a {
  color: var(--navigation);
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
}

nav a:link,
nav a:visited {
  text-decoration: none;
}

.pagination-list {
  order: 1;
  flex: 1;
}
.pagination-list li {
  list-style-type: none;
}
.is-current {
  background-color: var(--bright-blue);
  border-color: var(--bright-blue);
  color: white !important;
}

.pagination-link {
  font-size: 1rem;
  margin: 0.25rem;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  border-color: #dbdbdb;
  color: var(--font-color);
}

.pagination-previous {
  /* justify-content: center; */
  margin: 0.25rem;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-align: center;
  order: 2;
}

.pagination-next {
  order: 3;
}

.pagination-link[disabled],
.pagination-next[disabled],
.pagination-previous[disabled] {
  background-color: #dbdbdb;
  border-color: #dbdbdb;
  box-shadow: none;
  color: #7a7a7a;
  opacity: 0.5;
  cursor: default;
}

.pagination-next,
.pagination-previous {
  font-size: 1rem;
  color: var(--font-color);
  border: 1px solid #dbdbdb;
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  border-radius: 4px;
}
</style>
