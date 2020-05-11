<template>
  <router-view />
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Default from "~/layouts/Default.vue";

export default {
  components: {
    Layout: Default
  },
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.$static.metadata.siteDescription
        }
      ]
    };
  }
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
:root {
  --bg-color: white;
  --font-color: #3d455c;
  --bright-blue: #3273dc;
  --navigation: #4a4a4a;
  --headings: #363636;
  --logo-fill: #707070;
  --home-hereo-wave-fill: #f4f4f4;
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
</style>
