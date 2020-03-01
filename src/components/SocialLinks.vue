<template>
  <div class="navbar-end">
    <a
      v-for="social in accounts"
      :href="social.href"
      :key="social.name"
      class="navbar-item"
      :aria-label="social.name"
    >
      <i aria-hidden="true" :class="'fab fa-'+social.name"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        { name: "twitter", href: "http://twitter.com/therealdanvega" },
        { name: "github", href: "https://github.com/danvega/" },
        { name: "youtube", href: "http://www.youtube.com/danvega" },
        { name: "reddit", href: "https://www.reddit.com/u/therealdanvega" },
        { name: "instagram", href: "https://www.instagram.com/thedanvega/" },
        { name: "linkedin", href: "https://www.linkedin.com/in/danvega/" }
      ]
    };
  }
};
</script>

<style scoped>
.navbar-end {
  display: flex;
}
.navbar-item {
  color: white;
}
.navbar-item:hover {
  color: rgb(235, 235, 235);
  background-color: #3273dc;
}
</style>

