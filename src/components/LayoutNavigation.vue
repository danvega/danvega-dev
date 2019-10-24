<template>
  <nav class="navbar container" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img src="../assets/img/danvega_dev_logo.png" alt="Dan Vega's Logo" />
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <g-link class="navbar-item is-uppercase" to="/">Home</g-link>
        <g-link class="navbar-item is-uppercase" to="/blog">Blog</g-link>
        <g-link class="navbar-item is-uppercase" to="/courses">Courses</g-link>
        <g-link class="navbar-item is-uppercase" to="/speaking">Speaking</g-link>
        <g-link class="navbar-item is-uppercase" to="/about">About</g-link>
        <g-link class="navbar-item is-uppercase" to="/contact">Contact</g-link>
      </div>
    </div>
    <search-component />
  </nav>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";

export default {
  name: "LayoutNavigation",
  components: {
    SearchComponent
  },
  mounted() {
    const navbarBurgers = document.querySelectorAll(".navbar-burger");
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
/* .brand {
  margin-left: 5px;
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  font-weight: 700;
} */

.navbar-brand a.navbar-item {
  margin-left: 0px !important;
}

.navbar-item {
  font-family: "Oswald", sans-serif;
  font-size: 18px;
}
a.navbar-item:hover {
  background-color: white;
  color: #3273dc;
}
</style>
