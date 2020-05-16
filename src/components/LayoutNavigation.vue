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
        font-family="'Handlee', cursive"
        font-weight="700"
      >
        <tspan x="0" y="0">dan</tspan>
        <tspan
          y="0"
          class="logo-fill"
          font-family="'Handlee', cursive"
          font-weight="300"
        >
          vega
        </tspan>
      </text>
    </svg>
    <nav>
      <ul :class="{ show: showMobileMenu }">
        <li class="mobileLogo" :class="{ hidden: !showMobileMenu }">
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
              font-family="'Handlee', cursive"
              font-weight="700"
            >
              <tspan x="0" y="0">dan</tspan>
              <tspan
                y="0"
                class="logo-fill"
                font-family="'Handlee', cursive"
                font-weight="300"
              >
                vega
              </tspan>
            </text>
          </svg>
        </li>
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
      <font-awesome-icon
        icon="moon"
        size="2x"
        @click="toggleDarkMode()"
        ref="moon"
        aria-label="toggle dark mode"
      />
      <font-awesome-icon
        icon="sun"
        size="2x"
        class="hidden"
        @click="toggleDarkMode()"
        ref="sun"
        aria-label="toggle dark mode"
      />
    </div>
    <div class="hamburger">
      <font-awesome-icon
        icon="bars"
        size="2x"
        @click="showMobileMenu = !showMobileMenu"
        aria-label="toggle mobile menu"
      />
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
  data() {
    return {
      showMobileMenu: false
    };
  },
  methods: {
    toggleDarkMode() {
      if (document.documentElement.getAttribute("data-theme") === null) {
        document.documentElement.setAttribute("data-theme", "dark");
        this.$refs.moon.classList.add("hidden");
        this.$refs.sun.classList.remove("hidden");
      } else {
        document.documentElement.removeAttribute("data-theme");
        this.$refs.sun.classList.add("hidden");
        this.$refs.moon.classList.remove("hidden");
      }
    }
  }
};
</script>

<style scoped>
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
nav {
  flex: 1;
}
nav ul {
  list-style-type: none;
  display: flex;
  margin: 10px 0 0 0;
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
.hidden {
  display: none;
}
.fa-moon,
.fa-sun,
.fa-bars {
  cursor: pointer;
}
.fa-moon {
  color: var(--bright-blue);
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
.hidden {
  display: none;
}
@media (max-width: 1024px) {
  nav a {
    padding: 0.3rem 0.5rem;
  }
}
@media (max-width: 768px) {
  .navigation-bar {
    flex-direction: column;
  }
  .navigation-bar svg {
    align-self: flex-start;
  }
  .toggle-container {
    align-self: flex-end;
    order: 2;
  }
  .toggle-container {
    position: absolute;
    top: 20px;
    right: 60px;
  }
  .hamburger {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  nav ul {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    background-color: var(--mobile-menu-background);
    height: 100vh;
    width: 80%;
    flex-direction: column;
    z-index: 10;
    opacity: 0.98;
    border-right: 1px #6a6a6a solid;
    padding: 30px;
    transform: translateX(-800px);
    /* transition: transform 0.5s ease-in-out; */
  }
  nav ul.show {
    transform: translateX(0px);
  }
  nav ul li {
    border-bottom: 1px solid #6a6a6a;
    padding: 10px 0;
  }
  nav ul li a:link,
  nav ul li a:visited {
    color: var(--mobile-menu-link-color);
    display: block;
  }
  nav a:hover {
    color: var(--link-color-hover);
    border-bottom: none;
  }
  .hamburger {
    display: block;
    margin-left: 10px;
    cursor: pointer;
  }
  li.mobileLogo {
    padding: 0;
    margin: 0;
  }
}
</style>
