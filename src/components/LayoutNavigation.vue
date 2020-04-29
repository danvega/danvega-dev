<template>
  <div class="navigation-bar">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="89"
      height="44"
      viewBox="0 0 89 44"
      class="logo"
    >
      <text
        transform="translate(0 35)"
        fill="#3273dc"
        font-size="27"
        font-family="Noteworthy-Bold, Noteworthy"
        font-weight="700"
      >
        <tspan x="0" y="0">dan</tspan>
        <tspan
          y="0"
          class="logo-fill"
          font-family="Noteworthy-Light, Noteworthy"
          font-weight="300"
        >vega</tspan>
      </text>
    </svg>
    <nav class="flex-1 bg-gray-100">
      <ul>
        <li>
          <g-link class to="/" exact>Home</g-link>
        </li>
        <li>
          <g-link class to="/blog">Blog</g-link>
        </li>
        <li>
          <g-link class to="/courses">Courses</g-link>
        </li>
        <li>
          <g-link class to="/newsletter">Newsletter</g-link>
        </li>
        <li>
          <g-link class to="/about">About</g-link>
        </li>
        <li>
          <g-link class to="/contact">Contact</g-link>
        </li>
      </ul>
    </nav>
    <search-component v-if="hideSearch == true" />
    <div class="toggle-container">
      <i class="fas fa-moon fa-2x" @click="toggleDarkMode()" ref="toggleSwitch"></i>
    </div>
    <div class="hamburger">
      <i class="fas fa-bars fa-2x"></i>
    </div>
  </div>
</template>

<script>
import SearchComponent from "@/components/SearchComponent";

export default {
  components: {
    SearchComponent
  },
  props: {
    hideSearch: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    toggleDarkMode() {
      if (document.documentElement.getAttribute("data-theme") === null) {
        document.documentElement.setAttribute("data-theme", "dark");
        this.$refs.toggleSwitch.classList.remove("fa-moon");
        this.$refs.toggleSwitch.classList.add("fa-sun");
      } else {
        document.documentElement.removeAttribute("data-theme");
        this.$refs.toggleSwitch.classList.remove("fa-sun");
        this.$refs.toggleSwitch.classList.add("fa-moon");
      }
    }
  }
};
</script>

<style scoped>
.logo {
  width: 92px;
  margin-bottom: 8px;
}
.navigation-bar {
  display: flex;
  align-items: center;
}
.navigation-bar nav {
  /* flex: 1; */
}
</style>
