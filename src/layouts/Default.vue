<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/">
            <img src="https://therealdanvega.com/wp-content/uploads/2014/11/about_me_circle-600x591.png">
            <p class="brand">DV</p>
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <g-link class="navbar-item is-uppercase" :to="{ name: 'home' }">Home</g-link>
            <g-link class="navbar-item is-uppercase" :to="{ name: 'about' }">About</g-link>
            <g-link class="navbar-item is-uppercase" :to="{ name: 'blog' }">Blog</g-link>
            <g-link class="navbar-item is-uppercase" :to="{ name: 'speaking' }">Speaking</g-link>
            <g-link class="navbar-item is-uppercase" :to="{ name: 'projects' }">Projects</g-link>
          </div>
        </div>
        <div class="navbar-end">
          <a class="navbar-item">Night Mode</a>
        </div>
      </nav>
      
      <slot/>
      
      <footer>
          <hr>
          <p>Made with ❤️ in Cleveland, OH. Unless otherwise noted, all code is free to use under the <a href="https://gomakethings.com/mit">MIT License</a>.</p>
      </footer>
    </div>
  </div>

</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Oswald');

h1 {
    margin-top: 20px !important;
}
h2 {

}
h3 {
    margin-left:0px !important;
    padding-left:0px !important;
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
}

.brand {
    margin-left:5px;
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    font-weight: 700;
}
.article-title {
    margin-bottom:0px !important;
}
.navbar-item {
    font-family: 'Oswald', sans-serif;
}

code {
    margin: auto;
    background: #f9f9fa !important;
    padding: 0.1em 0.3em 0px;
    border-radius: 2px;
    color: #333842 !important;
    font-size: 0.84em;
    vertical-align: 0em;
    max-width: 100%;
    line-height: 1.6em;
}

@import "~bulma/bulma";
</style>