<template>
  <div class="newsletter-layout">
    <header>
            <nav class="navbar is-transparent container" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="@/assets/img/danvega_dev_logo_white.png" alt="Dan Vega's Logo" />
          </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-end">
            <g-link class="navbar-item is-uppercase" to="/">Home</g-link>
            <g-link class="navbar-item is-uppercase" to="/blog">Blog</g-link>
            <g-link class="navbar-item is-uppercase" to="/courses">Courses</g-link>
            <g-link class="navbar-item is-uppercase" to="/neswletter">Newsletter</g-link>
            <g-link class="navbar-item is-uppercase" to="/about">About</g-link>
            <g-link class="navbar-item is-uppercase" to="/contact">Contact</g-link>
          </div>
        </div>
      </nav>
      <h1 class="title">Coffee and Code</h1>
      <h2 class="subtitle">with Dan Vega</h2>
    </header>
    <slot />
  </div>
</template>

<script>

export default {
  name: 'newsletter-layout',
  components: {

  },
  metaInfo: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Anton|Caveat&display=swap' }
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


<style lang="scss" scoped>
.newsletter-layout {
  // background-color: rgb(255, 255, 255);
  height: 100vh;

  header {
    height: 55vh;
    background: url('../assets/img/marc-mintel-1iYTusNPlSk-unsplash.jpg');
    background-size: cover;
  }
  h1.title {
    font-family: 'Anton', sans-serif;
    font-size: 48px;
    color: #fff;
    text-align: center;
    margin: auto;
    padding-top: 100px;
  }
  h2.subtitle {
    font-family: 'Caveat', cursive;
    font-size: 24px;
    color: #fff;
    margin:auto;
    text-align: center;
  }
}

.navbar.is-transparent {
  background-color: transparent;
  background-image: none;
}
.navbar-item {
  color: #fff;
}
.navbar-item:hover {
  color: rgb(235, 235, 235);
}
</style>

