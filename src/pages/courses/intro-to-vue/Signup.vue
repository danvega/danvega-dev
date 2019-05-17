<template>
  <div id="intro-to-vue">
    <div class="background-overlay"></div>
    <div class="container">
      <header>
        <div class="logo">
          <g-image src="../../../assets/img/danvega-avatar.png" width="80"/>
        </div>
      </header>
      <div class="content">
        <div class="about">
          <h1>FREE Introduction to VueJS Course</h1>
          <h2>Do you want to learn how to get up and running with VueJS in just 1 hour?</h2>
          <p>
            If you're interested in getting started with VueJS I have a free course that is really going to help you. With over 75,000 students worldwide
            and lots of metrics to back it up I have found that developers take courses to learn a specific topic.
          </p>
          <p>
            In this course I will explain to you what VueJS is and why it's a great choice for beginners. After that you will get your development
            enviornment setup and write your first application. The best part about this course is that you only need an hour to get up and running.
          </p>
          <p>
            If you're interested in learning more you can check out
            <a
              href="https://www.danvega.dev/blog/2019/04/30/up-and-running-with-vue"
            >this article</a> I wrote on how to get started with Vue.
            If you have any questions please feel free to reach out to me on
            <a
              href="https://twitter.com/therealdanvega"
            >Twitter</a>.
          </p>
          <p>
            Thank You
            <br>
            <g-image src="../../../assets/img/signature.png"/>
          </p>
        </div>
        <div class="signup">
          <div id="convertkit"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  },
  methods: {
    loadSignupForm() {
      const converkit = document.createElement("script");
      converkit.setAttribute(
        "src",
        "https://f.convertkit.com/99df6613cd/581d8fda8f.js"
      );
      converkit.setAttribute("data-uid", "99df6613cd");
      converkit.setAttribute("async", true);
      document.getElementById("convertkit").appendChild(converkit);
    }
  },
  mounted() {
    this.loadSignupForm();
  }
};
</script>

<style scoped>
#app {
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: white;
}

.background-overlay {
  pointer-events: none;
  mix-blend-mode: overlay;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  background-image: url(~@/assets/img/course_signup_bg.png);
  background-size: cover;
}

.container {
  width: 75vw;
  height: 100vh;
  margin: auto;
}
.container .g-image {
  display: inline;
}
.logo {
  margin-top: 60px;
}

.content {
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.about {
  width: 50%;
}

.about h1 {
  box-sizing: border-box;
  color: white !important;
  border-bottom: 1px solid white;
}

.about h2 {
  box-sizing: border-box;
  color: white !important;
  margin-bottom: 40px;
  font-size: 19px;
}

.about p {
  box-sizing: border-box;
  line-height: 2.1;
  margin-bottom: 30px;
}
.about a,
.about a:visited {
  color: white;
  text-decoration: underline;
}
.signup {
  justify-content: center;
  align-content: center;
  text-align: center;
}

/* MOBILE LAYOUT */
@media (max-width: 415px) {
  .container {
    width: 100%;
    height: 100%;
    padding: 10px;
  }
  .container .logo .g-image {
    display: block !important;
    margin: auto;
  }
  .logo {
    margin-top: 10px;
  }
  .content {
    flex-direction: column;
    margin-top: 20px;
  }
  .about {
    width: 100%;
  }
  .about h1 {
    box-sizing: border-box;
    color: white !important;
    border: none;
    font-size: 24px;
  }
  .about h2 {
    box-sizing: border-box;
    color: white !important;
    margin-bottom: 20px;
    font-size: 17px;
  }
}
</style>
