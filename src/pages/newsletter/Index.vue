<template>
  <newsletter-layout>
    <section id="signup">
      <div class="container">
      </div>
    </section>
  </newsletter-layout>
</template>

<script>
import NewsletterLayout from '@/layouts/NewsletterLayout'
import Convertkit from '@/components/ConvertKit'

export default {
  components: {
    NewsletterLayout,
    Convertkit
  },
  mounted() {
    let ck = document.createElement('script');
    ck.setAttribute('data-uid','2245659c84');
    ck.setAttribute("async", true);
    ck.setAttribute('src','https://danvega.ck.page/2245659c84/index.js');
    document.querySelector('#signup .container').appendChild(ck);
  }
}
</script>

<style>
#signup .container {
  padding: 20px 0;
  margin: auto;
}
.formkit-form[data-uid="2245659c84"] {
  margin: auto;
}
</style>
