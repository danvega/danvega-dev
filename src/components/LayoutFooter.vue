<template>
  <footer>
    <div class="container">
      <div class="is-flex">
        <p>Made with ❤️ in Cleveland, OH.</p>
        <social-links />
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
  padding: 10px 0;
}
footer p {
  color: white;
}
</style>
