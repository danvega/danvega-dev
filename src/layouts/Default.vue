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

/* media queries */
@media (max-width: 1024px) {
  .container {
    padding: 0 20px;
  }
}
</style>
