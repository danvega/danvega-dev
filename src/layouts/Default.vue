<template>
  <div class="default-layout">
    <layout-navigation></layout-navigation>
    <section class="section">
      <div class="container">
        <slot />
      </div>
    </section>
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation";
import LayoutFooter from "@/components/LayoutFooter";

export default {
  components: {
    LayoutNavigation,
    LayoutFooter
  }
};
</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
:root {
  --var-bg: #ffffff;
  --var-txt-color: #2c3e50;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: var(--var-text-color);
  background-color: var(--var-bg);
  border-top: 7px solid #3273dc;
}
@media screen and (max-width: 768px) {
  .default-layout {
    margin: 0 20px !important;
  }
}
::selection {
  color: white;
  background: #3273dc;
}
h1 {
  margin-top: 20px !important;
  /* font-size: 1.95rem !important; */
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
}
</style>

