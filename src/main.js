// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import "~/assets/style/index.scss";

import DefaultLayout from "~/layouts/Default.vue";
import * as Sentry from "@sentry/browser";
import * as Integrations from "@sentry/integrations";
import VueFuse from "vue-fuse";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueFuse);

  Sentry.init({
    dsn: process.env.SENTURY_DSN,
    integrations: [
      new Integrations.Vue({
        Vue,
        attachProps: true
      })
    ]
  });

  head.link.push({
    rel: "stylesheet",
    href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
  });

  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker&display=swap"
  });
}
