<template>
  <div>
    <div class="container grow">
      <layout-navigation />
      <slot />
    </div>
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation.vue";
import LayoutFooter from "@/components/LayoutFooter.vue";

export default {
  components: {
    LayoutNavigation,
    LayoutFooter
  }
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
:root {
  --bg-color: white;
  --font-color: #3d455c;
  --bright-blue: #3273dc;
  --navigation: #4a4a4a;
  --headings: #363636;
  --logo-fill: #707070;
  --home-hereo-wave-fill: #f4f4f4;
  --link-color: #3273dc;
  --link-color-hover: #0256dd;
}

[data-theme="dark"] {
  --bg-color: #0f2342;
  --font-color: #ebf1fc;
  --headings: #ebf1fc;
  --navigation: #ebf1fc;
  --logo-fill: #ebf1fc;
  --home-hero-wave-fill: #0f2342;
}

html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  border-top: 8px solid var(--bright-blue);
  font-family: "Roboto Slab", serif;
}

p,
li,
th,
td {
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--font-color);
}

p {
  line-height: 1.7;
  margin-block-start: 1em;
  margin-block-end: 1em;
}

li {
  padding-bottom: 0.5rem;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--headings);
}

h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.5rem;
}

a:link,
a:visited {
  color: var(--link-color);
  text-decoration: none;
  font-weight: normal;
}
a:hover {
  color: var(--link-color-hover);
  text-decoration: underline;
}

.container {
  max-width: 1024px;
  margin: 0 auto;
}

.grow {
  flex-grow: 1;
}

/* header {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 10px 0 0 0;
} */

/* header > svg {
  margin-right: 20px;
  min-width: 100px;
}

svg .logo-fill {
  fill: var(--logo-fill);
} */

/* main p {
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--font-color);
  line-height: 1.7;
  margin-block-start: 1em;
  margin-block-end: 1em;
} */

/* MEDIA QUERIES */

/* @media (max-width: 1024px) {
  header,
  main {
    margin: 0 20px;
  }
  main img {
    max-width: 100%;
    margin-left: 0;
    float: none;
  }
  main p {
    font-size: 1.1rem;
  }
  footer {
    padding: 20px;
  }
}

@media (max-width: 768px) {
  nav ul {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(196, 196, 196);
    height: 100vh;
    width: 50%;
    flex-direction: column;
    z-index: 2;
    opacity: 0.98;
    border-right: 1px #6a6a6a solid;
    padding: 30px;
    transform: translateX(-500px);
    transition: transform 0.5s ease-in-out;
  }
  nav ul.show {
    transform: translateX(0px);
  }
  nav ul li {
    border-bottom: 1px solid #6a6a6a;
    padding: 10px 0;
  }
  nav ul li a {
    display: block;
  }
  nav a:hover {
    color: var(--bright-blue);
    border-bottom: none;
  }
  .hamburger {
    display: block;
    margin-left: 10px;
    cursor: pointer;
  }
  header,
  main {
    margin: 0 20px;
  }
}

@media (max-width: 600px) {
  footer > .container {
    flex-direction: column;
  }
} */
</style>
