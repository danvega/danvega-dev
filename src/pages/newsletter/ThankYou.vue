<template>
  <newsletter-layout>
    <section id="signup">
      <div class="container">
      <h3 class="title is-2">Thank you for subscribing</h3>
      <p>You should receieve your first issue of Coffee and Code this Sunday at 7:00 AM EST. In the meantime here are a few recent issues.</p>
      <ul>
        <li><a href="/newsletter/coffee-and-code/13">Coffee and Code: #13</a></li>
        <li><a href="/newsletter/coffee-and-code/12">Coffee and Code: #12</a></li>
        <li><a href="/newsletter/coffee-and-code/11">Coffee and Code: #11</a></li>
      </ul>
      </div>
    </section>
  </newsletter-layout>
</template>

<script>
import NewsletterLayout from '@/layouts/NewsletterLayout'

export default {
  components: {
    NewsletterLayout,
  }
}
</script>

<style>
#signup {
  background-color: #F9FAFB;
}
#signup .container {
  padding: 20px 0;
  margin: auto;
}

.formkit-form[data-uid="2245659c84"] {
  margin: auto;

}
</style>
