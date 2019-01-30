<template>
  <div class="navbar-end is-hidden-mobile is-hidden-tablet-only">
    <a v-for="social in shuffle" :href="social.href" :key="social.name" class="navbar-item">
      <i :class="'fab fa-'+social.name"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accounts: [
        { name: "twitter", href: "http://twitter.com/therealdanvega" },
        { name: "github", href: "https://github.com/cfaddict/" },
        { name: "youtube", href: "http://www.youtube.com/therealdanvega" },
        { name: "reddit", href: "https://www.reddit.com/u/therealdanvega" },
        { name: "instagram", href: "https://www.instagram.com/thedanvega/" },
        { name: "linkedin", href: "https://www.linkedin.com/in/danvega/" }
      ]
    };
  },
  computed: {
    shuffle() {
      return this.accounts.sort(() => 0.5 - Math.random() );
    }
  }
};
</script>