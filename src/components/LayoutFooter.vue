<template>
  <footer class="columns is-centered">
    <div class="column is-half">
      <div class="columns">
        <div class="column">
          <p>Made with ❤️ in Cleveland, OH.</p>
        </div>
        <div class="column is-pulled-right">
          <social-links />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SocialLinks from "@/components/SocialLinks";

export default {
  name: "layout-footer",
  components: {
    SocialLinks
  }
};
</script>

<style>
footer {
  background-color: #3273dc;
}
footer p {
  color: white;
}
</style>
