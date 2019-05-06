<template>
  <Layout>
    <div class="content">
      <h1 class="title is-2">Newsletter Signup</h1>
      <p>If you would like to stay up to date with everything that I am up to you are in the right place. If you signup below I will send you fresh content, tips and tricks and let you know what articles & courses I am working on.</p>
      <convert-kit uid="9e7e6036d3" script="https://f.convertkit.com/9e7e6036d3/e146cc5eb6.js"></convert-kit>
    </div>
  </Layout>
</template>

<script>
import ConvertKit from "@/components/ConvertKit";

export default {
  name: "signup",
  components: {
    ConvertKit
  }
};
</script>