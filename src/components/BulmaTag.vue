<template>
  <div class="tags">
    <a v-for="tag in tags" :key="tag.id" :href="'/tag/' + tag.title">
      <span class="tag is-primary">{{tag.title}}</span>
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
.tags a {
  margin-left: 5px;
}
</style>
