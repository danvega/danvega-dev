<template>
  <Layout>
    <h1>Newsletter</h1>
    <p>
      I started this newsletter as a way to keep myself writing each and every
      week. I have a blog that I like to write for but a blog post can be a lot
      of a pressure. This is a no pressure way for me to write and in the
      meantime connect with you on a weekly basis. Enter your email below to
      recieve my weekly newsletter every Monday morning.
    </p>
    <section id="signup"></section>
  </Layout>
</template>

<script>
import Convertkit from "@/components/ConvertKit";

export default {
  components: {
    Convertkit,
  },
  mounted() {
    let ck = document.createElement("script");
    ck.setAttribute("data-uid", "2245659c84");
    ck.setAttribute("async", true);
    ck.setAttribute("src", "https://danvega.ck.page/2245659c84/index.js");
    document.querySelector("#signup").appendChild(ck);
  },
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

#newsletter-list {
  list-style: none;
  padding: 0px;
}

#newsletter-list li {
  border-bottom: 1px solid #eee;
  margin-bottom: 30px;
  padding-bottom: 20px;
  font-size: 1.2rem;
}
</style>
