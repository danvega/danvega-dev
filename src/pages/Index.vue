<template>
  <Layout>
    <div class="content">
      
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <h1 class="title is-2">Hi, I’m Dan Vega.</h1>
          <p>I'm a programmer, curriculum developer and life long learner from Cleveland Ohio. </p>
          <p>I created this site so that I could document the things that I learn or enjoy working with and help you avoid the mistakes that I make. If you enjoy my content please share it with your friends. </p>
        </div>
        <div class="column right-side">
          <g-image src="../assets/img/danvega-avatar.png" class="avatar" alt="Dan Vega Avatar"/>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Welcome to my website",
    meta: [
      { name: "author", content: "Dan Vega" },
      { name: "description", content: "This is the personal blog of Dan Vega."},
      {
        name: "google-site-verification",
        content: "QAgV9Q_4DY1l8dMEs9BrGv1qzJaJWn7_KilM5F7-nAo"
      }
    ]
  }
};
</script>

<style>
.avatar {
  max-width: 200px;
  text-align: center;
  margin:30px auto;
}
.right-side {
  text-align: center;
}
</style>
