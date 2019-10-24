<template>
  <div class="newsletter-layout">
    <header>
      <layout-navigation
        useColorLogo="false"
        useTransparentBackground="true"
        navbarLocation="end"
        hideSearch="true"/>
      <h1 class="title">Coffee and Code</h1>
      <h2 class="subtitle">with Dan Vega</h2>
    </header>
    <slot />
  </div>
</template>

<script>
import LayoutNavigation from '@/components/LayoutNavigation';

export default {
  name: 'newsletter-layout',
  components: {
    LayoutNavigation
  },
  metaInfo: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Anton|Caveat&display=swap' }
    ]
  }
};
</script>

<style lang="scss" scoped>
.newsletter-layout {
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
</style>

