// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
// import * as Sentry from "@sentry/browser";
// import * as Integrations from "@sentry/integrations";
import VueFuse from "vue-fuse";
import VueDisqus from "vue-disqus";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueFuse);
  Vue.use(VueDisqus);
  // Sentry.init({
  //   dsn: process.env.SENTURY_DSN,
  //   integrations: [
  //     new Integrations.Vue({
  //       Vue,
  //       attachProps: true
  //     })
  //   ]
  // });
}
