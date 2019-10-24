<template>
  <nav class="navbar container" :class="{'is-transparent' : useTransparentBackground }" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <g-image :src="require(`@/assets/img/${useColorLogo == true ? logoColor : logoWhite }`)" alt="danvega.dev logo"/>
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
      <div :class="'navbar-' + navbarLocation">
        <g-link class="navbar-item is-uppercase" to="/">Home</g-link>
        <g-link class="navbar-item is-uppercase" to="/blog">Blog</g-link>
        <g-link class="navbar-item is-uppercase" to="/courses">Courses</g-link>
        <g-link class="navbar-item is-uppercase" to="/newsletter">Newsletter</g-link>
        <g-link class="navbar-item is-uppercase" to="/about">About</g-link>
        <g-link class="navbar-item is-uppercase" to="/contact">Contact</g-link>
      </div>
    </div>
    <search-component v-if="hideSearch == true"/>
  </nav>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";

export default {
  name: "LayoutNavigation",
  components: {
    SearchComponent
  },
  props: {
    useColorLogo: {
      type: Boolean,
      default: true
    },
    useTransparentBackground: {
      type: Boolean,
      default: false
    },
    navbarLocation: {
      type: String,
      default: 'start'
    },
    hideSearch: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      logoColor: 'danvega_dev_logo.png',
      logoWhite: 'danvega_dev_logo_white.png'
    }
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

<style scoped>
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

.navbar.is-transparent {
  background-color: transparent;
  background-image: none;
}
.navbar.is-transparent .navbar-item {
  color: #fff;
}
.navbar.is-transparent .navbar-item:hover {
  color: rgb(235, 235, 235);
}
</style>
