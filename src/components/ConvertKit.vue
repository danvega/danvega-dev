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
/* #convertkit {
  margin: 40px 0 0 0;
  width: 100% !important;
} */

/* #convertkit {
  margin-bottom: 40px;
} */

.formkit-form[data-uid="52adfca2a6"] .formkit-fields {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: nowrap !important;
  margin: 0 auto;
}

.formkit-form[data-uid="52adfca2a6"] .formkit-field,
.formkit-form[data-uid="52adfca2a6"] .formkit-submit {
  margin: 0 0 15px 0;
  -webkit-flex: none !important;
  -ms-flex: none !important;
  flex: none !important;
}
.formkit-form[data-uid="52adfca2a6"] .formkit-field {
  margin-right: 10px !important;
  flex: 1 !important;
}
</style>
