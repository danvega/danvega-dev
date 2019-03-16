<template>
  <div id="convertkit" align="center"></div>
</template>

<script>
export default {
  props: {
    uid: String,
    script: String,
    async: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {};
  },
  mounted() {
    let converkit = document.createElement("script");
    converkit.setAttribute("src", this.script);
    converkit.setAttribute("data-uid", this.uid);
    converkit.setAttribute("async", this.async);
    document.getElementById("convertkit").appendChild(converkit);
  }
};
</script>

<style>
#convertkit {
  margin: 40px 0 0 0;
  width: 100% !important;
}
</style>
