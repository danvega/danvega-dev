<template>
  <div>
    <div class="wave-container">
      <div class="container">
        <layout-navigation />
        <header>
          <div class="welcome">
            <h1>
              Learn to Code
              <span>with Dan Vega</span>
            </h1>
            <p>
              If you want to learn how to code Subscribe to my weekly newsletter
              for the latest articles and tutorials. As a special bonus I will
              send you my favorite resources for begginers who want to learn how
              to code.
            </p>
            <!-- <convertkit uid="52adfca2a6" script="https://danvega.ck.page/52adfca2a6/index.js" /> -->
          </div>
          <div class="banner">
            <g-image src="../assets/img/home-header.png" />
          </div>
        </header>
      </div>
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#3273db"
          fill-opacity="1"
          d="M0,96L40,96C80,96,160,96,240,85.3C320,75,400,53,480,42.7C560,32,640,32,720,37.3C800,43,880,53,960,80C1040,107,1120,149,1200,160C1280,171,1360,149,1400,138.7L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        />
      </svg>-->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1921.281 145.82">
        <path
          d="M4221-1918.177s334.258-105.245,817.4-13.84,1103.883-108.889,1103.883-108.889v145.82H4221Z"
          transform="translate(-4221 2040.906)"
          fill="#3273db"
        />
      </svg>
    </div>
    <section id="about">
      <div class="container">
        <g-image src="../assets/img/danvega-avatar.png" class="avatar" alt="Dan Vega Avatar" />
        <h2>Hi, I'm Dan Vega</h2>
        <p>
          I’m a Husband, Father, Curriculum Developer and maker of things from
          Cleveland Ohio. I created this website as a place to document my
          journey as I learn new things and share them with you. I have a real
          passion for teaching and I hope that one of blog posts, videos or
          courses helps you solve a problem or learn something new.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation.vue";

export default {
  components: {
    LayoutNavigation
  },
  metaInfo: {
    link: [
      {
        rel: "stylesheet",
        href: "https://use.fontawesome.com/releases/v5.7.0/css/all.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Oswald:400,600,700|Roboto+Slab:300,400|Courgette&display=swap"
      },
      {
        rel: "stylsheet",
        href: "https://use.typekit.net/rfi8kwv.css"
      }
    ]
  }
};
</script>

<style>
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: system-ui, sans-serif;
}

.wave-container {
  position: relative;
  background: #f4f4f4;
  color: #4a4a4a;
  text-align: center;
  overflow: hidden;
}

.wave-container > svg {
  display: block;
}

#about {
  background: #3273db;
  margin: 0;
}

/* FROM INDEX */

header {
  display: flex;
  align-items: flex-start;
}

header h1 {
  font-family: nove, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 2.5rem;
  color: #4a4a4a;
}
h1 span {
  font-family: "Noteworthy";
  color: #3273db;
  display: block;
  font-size: 2rem;
  text-transform: none;
  margin-top: -10px;
}
.welcome p {
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 1.2rem;
  line-height: 2.2rem;
}

section {
  margin: 0;
}
section > h2,
section p {
  color: white;
}
.avatar {
  max-width: 200px;
  float: right;
  margin-left: 40px;
}

section p {
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 1.4rem;
  color: white;
  line-height: 1.7;
  margin-block-start: 1em;
  margin-block-end: 1em;
}

h3 {
  text-transform: uppercase;
}

#posts {
  margin: 0;
  padding: 0;
}
#posts > li {
  list-style-type: none;
  margin-bottom: 1.2rem;
}

/* Latest Articles */

#post-cards {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 30px;
}
.post-card {
  display: flex;
  flex-direction: column;
}
.post-card img {
  width: 100%;
  height: 200px;
  border-radius: 0.75rem;
}
.post-card h4 {
  margin-top: 8px;
  font-family: "Oswald", sans-serif;
  font-size: 0.9rem;
  text-transform: uppercase;
  color: #4a4a4a;
}
.post-card p {
  color: black;
  font-size: 0.9rem;
}
.post-card:hover {
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
}

.more-articles {
  margin-top: 1.3rem;
  text-align: center;
}
.more-articles a {
  display: inline-block;
  padding: 18px;
  background: #3273db;
  color: #fff;
  margin: 0 auto;
  text-decoration: none;
  border-radius: 0.5rem;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.2);
}

.more-articles a:hover {
  background: #1964dd;
  transform: translateY(3px);
  transition: all 0.2s ease-in-out;
}

/* Featured Course */

#featured-course {
  background-color: #f4f4f4;
}
.featured-course-wrapper {
  display: flex;
}

.featured-course-wrapper p {
  color: black;
  font-size: 1.1rem;
  margin-top: 0px;
  padding-left: 10px;
}

/* Latest Videos */

#latest-videos {
  margin-top: 20px;
  margin-bottom: 40px;
}

#latest-videos p {
  color: black;
  font-size: 1.1rem;
  margin-top: 0px;
  margin-bottom: 40px;
}

.youtube-setup {
  max-width: 600px;
}
</style>
