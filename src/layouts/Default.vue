<template>
  <div class="default-layout">
    <announcements-banner></announcements-banner>
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
import AnnouncementsBanner from "@/components/AnnouncementsBanner";
import LayoutNavigation from "@/components/LayoutNavigation";
import LayoutFooter from "@/components/LayoutFooter";

export default {
  components: {
    AnnouncementsBanner,
    LayoutNavigation,
    LayoutFooter
  },
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker|Roboto+Slab&display=swap"
      }
    ]
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

<style lang="scss" src="~/assets/style/index.scss"></style>
<style>
:root {
  --var-bg: #ffffff;
  --var-txt-color: #3d455c;
}
.default-layout {
  /* font-family: Roboto Slab -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  font-family: "Roboto Slab";
  font-size: 22px;
  font-weight: 300;
  color: var(--var-text-color);
  background-color: var(--var-bg);
  border-top: 7px solid #3273dc;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
</style>

