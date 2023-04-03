// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import VueFuse from "vue-fuse";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun, faBars, faSearch, faTags } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faTwitter, faYoutube, faReddit, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faMoon, faSun, faBars, faSearch, faTags, faGithub, faTwitter, faYoutube, faReddit, faInstagram, faLinkedin);

export default function(Vue, { router, head, isClient }) {
  Vue.component("font-awesome-icon", FontAwesomeIcon);
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueFuse);
}
