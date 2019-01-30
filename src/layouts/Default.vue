<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <layout-navigation></layout-navigation>
      <slot/>
      <layout-footer/>
    </div>
  </div>

</template>

<script>
import LayoutNavigation from '@/components/LayoutNavigation';
import LayoutFooter from '@/components/LayoutFooter';

export default {
  components: {
    LayoutNavigation,
    LayoutFooter
  }
}
</script>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
h1 {
    margin-top: 20px !important;
    /* font-size: 1.95rem !important; */
}
h1, h2, h3, h4, h5, h6 {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
}
</style>