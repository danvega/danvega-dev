<template>
  <div class="newsletter-layout">
    <header>
      <h1>Coffee and Code</h1>
      <h2>with Dan Vega</h2>
    </header>
    <slot />
  </div>
</template>

<script>

export default {
  name: 'newsletter-layout',
  components: {

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


<style scoped>
.newsletter-layout {
  background-color: #F9FAFB;
  height: 100vh;
}
header {
  height: 55vh;
  background: url('../assets/img/marc-mintel-1iYTusNPlSk-unsplash.jpg');
  background-size: cover;
}
h1 {
  margin: auto;
  padding-top: 100px;
  text-align: center;
  font-size: 48px;
  color: #fff;
}
h2 {
  margin:auto;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
</style>

