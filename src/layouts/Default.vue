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
          "https://fonts.googleapis.com/css?family=Oswald:400,600,700|Roboto+Slab:300,400&display=swap"
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

<style>
.container {
  max-width: 1024px;
  margin: 0 auto;
}

.grow {
  flex-grow: 1;
}

header {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 10px 0 0 0;
}

header > svg {
  margin-right: 20px;
  min-width: 100px;
}

svg .logo-fill {
  fill: var(--logo-fill);
}

nav {
  flex: 1;
}
nav ul {
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 0;
}

nav a {
  font-family: "Oswald", sans-serif;
  font-size: 1.2rem;
  color: var(--navigation);
  text-transform: uppercase;
  padding: 0.3rem 0.75rem;
}

nav a:link,
nav a:visited {
  text-decoration: none;
}

nav a:hover {
  color: var(--bright-blue);
  border-bottom: 2px solid var(--bright-blue);
}

nav a.active {
  color: var(--bright-blue);
}

.hamburger {
  display: none;
}

.fa-moon,
.fa-sun,
.fa-bars {
  cursor: pointer;
}

.fa-moon {
  color: #0f2342;
}

.fa-sun {
  color: #f7dc50;
}

.fa-bars {
  color: var(--bright-blue);
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

main p {
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: var(--font-color);
  line-height: 1.7;
  margin-block-start: 1em;
  margin-block-end: 1em;
}

footer {
  background-color: var(--bright-blue);
  padding: 10px 0;
}

footer > .container {
  display: flex;
  align-items: center;
}

footer p {
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 1.1rem;
  color: #fff;
  flex: 1;
}

footer a {
  color: #fff;
  font-size: 1.2rem;
  padding: 0.5rem 0.75rem;
}

footer a > svg {
  fill: white;
  width: 1.2rem;
}

/* MEDIA QUERIES */

@media (max-width: 1024px) {
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
}
</style>
