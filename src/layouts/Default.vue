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
  --background: white;
  --home-header-background: #f4f4f4;
  --home-postcard-font-color: #3d455c;
  --home-featured-background: #f4f4f4;
  --home-featured-font-color: #3d455c;
  --home-youtube-font-color: #3d455c;
  --bg-color: white;
  --font-color: #3d455c;
  --bright-blue: #3273dc;
  --navigation: #4a4a4a;
  --headings: #363636;
  --logo-fill: #707070;
  --home-hereo-wave-fill: #f4f4f4;
  --link-color: #3273dc;
  --link-color-hover: #0256dd;
  --link-text-decoration: none;
  --shiki-inline-background: #eeeeee;
  --shiki-inline-color: #ff4e46;
  --font-color-inverse: #ebf1fc;
  --mobile-menu-background: #efefef;
  --mobile-menu-link-color: #0f2342;
}

[data-theme="dark"] {
  --background: #0f2342;
  --home-header-background: #0f2342;
  --home-featured-background: var(--bright-blue);
  --home-postcard-font-color: #ebf1fc;
  --home-featured-font-color: #ebf1fc;
  --home-youtube-font-color: #ebf1fc;
  --bg-color: #0f2342;
  --font-color: #ebf1fc;
  --headings: #ebf1fc;
  --navigation: #ebf1fc;
  --logo-fill: #ebf1fc;
  --home-hero-wave-fill: #0f2342;
  --link-color: #ffffff;
  --link-color-hover: #ffffff;
  --link-text-decoration: underline;
  --shiki-inline-background: white;
  --shiki-inline-color: #81a1c1;
  --font-color-inverse: #3d455c;
  --mobile-menu-background: #d1d1d1;
  --mobile-menu-link-color: #0f2342;
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
  background-color: var(--background);
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
h4 {
  font-size: 1.3rem;
}
h5 {
  font-size: 1.1rem;
}

a:link,
a:visited {
  color: var(--link-color);
  text-decoration: var(--link-text-decoration);
  font-weight: normal;
}
a:hover {
  color: var(--link-color-hover);
  text-decoration: underline;
}

blockquote {
  margin: 20px 0;
  background-color: #f5f5f5;
  border-left: 5px solid #dbdbdb;
  padding: 1.25em 1.5em;
}
blockquote > p {
  color: #3d455c;
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
    margin: 0;
    padding: 0 20px;
  }
}
</style>
