// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Import main css
import '~/assets/style/index.scss';

import DefaultLayout from '~/layouts/Default.vue'
import InstantSearch from 'vue-instantsearch'
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

export default function (Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(InstantSearch);

  Sentry.init({
    dsn: 'https://506350377fb44e1fbc756457c784e23f@sentry.io/1476538',
    integrations: [new Integrations.Vue({Vue, attachProps: true})],
  });

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Oswald'
  })

}
