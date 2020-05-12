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
    <nav>
      <ul>
        <li>
          <g-link to="/" exact>Home</g-link>
        </li>
        <li>
          <g-link to="/blog">Blog</g-link>
        </li>
        <li>
          <g-link to="/courses">Courses</g-link>
        </li>
        <li>
          <g-link to="/newsletter/">Newsletter</g-link>
        </li>
        <li>
          <g-link to="/about">About</g-link>
        </li>
        <li>
          <g-link to="/contact">Contact</g-link>
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

<style>
nav {
  flex: 1;
}
nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav a {
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  color: var(--navigation);
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
}

nav a:link,
nav a:visited {
  text-decoration: none;
}

nav a:hover {
  color: var(--bright-blue);
  border-bottom: 2px solid var(--bright-blue);
}

nav a.active {
  color: var(--bright-blue);
}
.logo {
  width: 92px;
  margin-bottom: 8px;
}
.navigation-bar {
  display: flex;
  align-items: center;
}
.navigation-bar nav {
  flex: 1;
}

.navigation-bar > svg {
  margin-right: 20px;
  min-width: 100px;
}

.navigation-bar svg .logo-fill {
  fill: var(--logo-fill);
}

.fa-moon,
.fa-sun,
.fa-bars {
  cursor: pointer;
}

.fa-moon {
  color: #0f2342;
}

.fa-sun {
  color: #f7dc50;
}

.fa-bars {
  color: var(--bright-blue);
}

.hamburger {
  display: none;
}
</style>
