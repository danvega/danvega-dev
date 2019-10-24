<template>
  <Layout>
    <div class="contact">
      <h1 class="title is-2">Contact Me</h1>
      <p>Please feel free to use the form below to contact me about anything you want. You can also reach me on Twitter with any feedback you have or if you just want to say 👋</p>
      <br />
      <form
        name="website-feedback"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="website-feedback" />
        <div class="field">
          <input type="text" name="name" class="input" placeholder="Your Name" />
        </div>
        <div class="field">
          <input type="email" name="email" class="input" placeholder="Your Email" />
        </div>
        <div class="field">
          <textarea class="textarea" name="message" placeholder="What's on your mind?"></textarea>
        </div>
        <button type="submit" class="button is-info is-medium">Submit</button>
      </form>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>

<style>
</style>




