<template>
  <Layout>
    <div class="content">
      
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <h1 class="title is-2">Hi, I’m Dan Vega.</h1>
          <p>I am a Software Engineer living just outside of one of my favorite places in the world, Cleveland, Ohio. I am a self-taught programmer who firmly believes that you can accomplish anything in this life if you put your mind to it, roll up your sleeves and are willing to put in the work.</p>
          <p>I have been writing software for over 20+ years now and I use my knowledge, passion, and influence to help other developers achieve their goals. I teach online and currently, have over 65,000 students.</p>
          <p>In my personal life I am a husband to my best friend in the world and a father to a little princess. I enjoy reading, running and lifting weights to get me through the week.</p>
        </div>
        <div class="column right-side">
          <g-image src="../assets/img/danvega-avatar.png" class="avatar"/>
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
      { name: "description", content: "This is the personal blog of Dan Vega."}
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
