<template>
  <div class="tags">
    <a v-for="tag in tags" :key="tag.id" :href="'/tag/' + tag.title">
      <font-awesome-icon :icon="['fas', 'tags']" />
      {{ tag.title }}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    tags: Array
  }
};
</script>

<style>
.tags {
  margin: 40px 0;
}
.tags a {
  background-color: var(--bright-blue);
  padding: 10px;
  color: white;
  text-decoration: none;
  font-family: hack, sans-serif;
  font-weight: 400;
  border-radius: 4px;
  margin-right: 8px;
}
.fas .fa-tags {
  color: white;
}
</style>
