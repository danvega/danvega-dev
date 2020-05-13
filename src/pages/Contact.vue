<template>
  <Layout>
    <h1>Contact Me</h1>
    <p>Please feel free to use the form below to contact me about anything you want. You can also reach me on Twitter with any feedback you have or if you just want to say 👋</p>
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
      <button type="submit">Submit</button>
    </form>
  </Layout>
</template>

<script>
export default {};
</script>

<style scoped>
form {
  margin-bottom: 40px;
}
.field {
  margin: 10px 0;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 1.1rem;
  color: var(--font-color);
  border-color: rgb(230, 230, 230);
}
button {
  background-color: #209cee;
  border-color: transparent;
  color: #fff;
  padding: 10px 20px;
  font-size: 1.1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>




