<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img
          src="https://therealdanvega.com/wp-content/uploads/2014/11/about_me_circle-600x591.png"
        >
        <p class="brand">DV</p>
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
        <g-link class="navbar-item is-uppercase" :to="{ name: 'about' }">About</g-link>
        <g-link class="navbar-item is-uppercase" :to="{ name: 'blog' }">Blog</g-link>
        <g-link class="navbar-item is-uppercase" :to="{ name: 'speaking' }">Speaking</g-link>
      </div>
    </div>
    <div class="navbar-end is-hidden-mobile is-hidden-tablet-only">
      <a href="http://twitter.com/therealdanvega" class="navbar-item"><i class="fab fa-twitter"></i></a>
      <a href="https://github.com/cfaddict/" class="navbar-item"><i class="fab fa-github"></i></a>
      <a href="http://www.youtube.com/therealdanvega" class="navbar-item"><i class="fab fa-youtube"></i></a>
      <a href="https://www.reddit.com/u/therealdanvega" class="navbar-item"><i class="fab fa-reddit"></i></a>
      <a href="https://www.instagram.com/thedanvega/" class="navbar-item"><i class="fab fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/danvega/" class="navbar-item"><i class="fab fa-linkedin"></i></a>
    </div>
  </nav>
</template>

<script>
export default {
  name: "LayoutNavigation",
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
