<template>
<nav class="pagination" role="navigation" aria-label="pagination">
  <a :href="previousPage(info.currentPage,info.totalPages)" class="pagination-previous" :disabled="info.currentPage == 1">Previous</a>
  <ul class="pagination-list">
    <li v-for="page in info.totalPages" :key="page">
      <a :href="baseUrl + '/' + page" class="pagination-link" :class="{'is-current': page == info.currentPage}" aria-label="Page 1" aria-current="page">{{page}}</a>
    </li>
  </ul>
  <a :href="nextPage(info.currentPage,info.totalPages)" class="pagination-next" :disabled="info.currentPage == info.totalPages">Next page</a>
</nav>
</template>

<script>
export default {
    props: ['baseUrl','info'],
    methods: {
      nextPage(currentPage,totalPages) {
        return `${this.baseUrl}/${currentPage + 1}`;
      },
      previousPage(currentPage,totalPages) {
        return `${this.baseUrl}/${currentPage - 1}`;
      }
    }
}
</script>

<style>
.pagination-list {
  margin-left:0px !important;
}
.pagination-list li {
  list-style-type: none;
}
.is-current {
  background-color:#FF4E46 !important;
  border-color: #FF4E46 !important;
}
</style>
