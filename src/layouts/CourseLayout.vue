<template>
  <div class="courses">
    <header></header>
    <slot />
  </div>
</template>

<script>
export default {
  name: "course-layout"
};
</script>

<style scoped>
header {
  width: 100%;
  height: 100%;
  background: url("../assets/img/courses-background.png");
  background-size: cover;
}
</style>
