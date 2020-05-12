<template>
  <Layout>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatum explicabo necessitatibus perferendis impedit, sit officiis vel id obcaecati enim quasi quia nulla. Enim quae a deserunt porro non dolor.</p>
    <p>Quisquam nisi culpa provident distinctio debitis facere adipisci expedita sequi vero molestiae nostrum delectus numquam nobis laborum reprehenderit modi beatae, accusamus aliquam perferendis? Impedit in cumque magni iste, nobis veniam!</p>
    <p>Expedita laborum aliquid necessitatibus sint facilis distinctio error quidem exercitationem quae quibusdam doloribus consectetur ratione eveniet quo natus aspernatur incidunt, omnis nostrum dignissimos fugiat, velit, molestiae autem. Qui, eos perferendis?</p>
    <section id="signup"></section>
    <section>
      <g-link to="/newsletter/archives">Archives</g-link>
      <br />
      <g-link to="/newsletter/thank-you">Thank You</g-link>
    </section>
  </Layout>
</template>

<script>
import Convertkit from "@/components/ConvertKit";

export default {
  components: {
    Convertkit
  },
  mounted() {
    let ck = document.createElement("script");
    ck.setAttribute("data-uid", "2245659c84");
    ck.setAttribute("async", true);
    ck.setAttribute("src", "https://danvega.ck.page/2245659c84/index.js");
    document.querySelector("#signup").appendChild(ck);
  }
};
</script>

<style>
section {
  padding: 20px 0;
  margin: auto;
}
.formkit-form[data-uid="2245659c84"] {
  margin: auto;
}
</style>
