<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <g-image src="../assets/img/danvega-avatar.png" alt="Hi, I'm Dan Vega!" width="23" height="32"/>
      </a>
      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <g-link class="navbar-item is-uppercase" :to="{ name: 'home' }">Home</g-link>
        <g-link class="navbar-item is-uppercase" :to="{ name: 'blog' }">Blog</g-link>
        <g-link class="navbar-item is-uppercase" :to="{ name: 'speaking' }">Speaking</g-link>
        <g-link class="navbar-item is-uppercase" :to="{ name: 'about' }">About</g-link>
      </div>
    </div>
    <social-links/>
  </nav>
</template>

<script>
import SocialLinks from '@/components/SocialLinks';

export default {
  name: "LayoutNavigation",
  components: {
    SocialLinks
  },
  data() {
    return {
    };
  },
  methods: {},
  mounted() {
    const navbarBurgers = document.querySelectorAll('.navbar-burger');
    navbarBurgers.forEach(menu => {
      menu.addEventListener("click", () => {
        const target = document.getElementById(menu.dataset.target);
        menu.classList.toggle("is-active");
        target.classList.toggle("is-active");
      });
    });
  }
};
</script>

<style>
.brand {
  margin-left: 5px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
}

.navbar-item {
  font-family: "Oswald", sans-serif;
}
</style>
