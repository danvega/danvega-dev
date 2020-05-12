<template>
  <Layout>
    <section id="signup">
      <div class="container"></div>
    </section>
    <g-link to="/newsletter/archives">Archives</g-link>
    <br />
    <g-link to="/newsletter/thank-you">Thank You</g-link>
  </Layout>
</template>

<script>
import DefaultLayout from "@/layouts/Default";
import Convertkit from "@/components/ConvertKit";

export default {
  components: {
    Layout: DefaultLayout,
    Convertkit
  },
  mounted() {
    let ck = document.createElement("script");
    ck.setAttribute("data-uid", "2245659c84");
    ck.setAttribute("async", true);
    ck.setAttribute("src", "https://danvega.ck.page/2245659c84/index.js");
    document.querySelector("#signup .container").appendChild(ck);
  }
};
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
