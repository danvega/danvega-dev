<template>
  <div id="body">
    <div class="container grow">
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
          <convertkit
            uid="52adfca2a6"
            script="https://danvega.ck.page/52adfca2a6/index.js"
          />
        </div>
        <div class="banner">
          <g-image src="../assets/img/home-header.png" />
        </div>
      </header>
      <section>
        <g-image
          src="../assets/img/danvega-avatar.png"
          class="avatar"
          alt="Dan Vega Avatar"
        />
        <h2>Hi, I'm Dan Vega</h2>
        <p>
          I’m a Husband, Father, Curriculum Developer and maker of things from
          Cleveland Ohio. I created this website as a place to document my
          journey as I learn new things and share them with you. I have a real
          passion for teaching and I hope that one of blog posts, videos or
          courses helps you solve a problem or learn something new.
        </p>
      </section>
      <section>
        <h3>Featured Articles</h3>
        <div id="cards">
          <div
            class="card"
            v-for="post in $page.recentPosts.edges"
            :key="post.node.id"
          >
            <div
              class="card-cover"
              :style="{ backgroundImage: 'url(' + post.node.cover.src + ')' }"
            ></div>
            <div class="card-content">
              <h4>{{ post.node.title }}</h4>
              <p>{{ post.node.excerpt }}</p>
              <g-link :to="post.node.path" :aria-label="post.node.title"
                >Read More</g-link
              >
            </div>
            <div class="card-footer">
              <div class="date">🗓 {{ post.node.date }}</div>
              <div>☕️ {{ post.node.timeToRead }} min read</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <section id="featured-course">
      <div class="container">
        <h3>Featured Course</h3>
        <div class="featured-course-wrapper">
          <div>
            <g-image src="../assets/img/feature-course-vuejs.png" />
            <h4>VUE.JS FOR BEGINNERS: UP AND RUNNING WITH VUE</h4>
          </div>
          <div>
            <p>
              Vue has quickly become one of the most popular JavaScript
              frameworks around and in my opinion, it is the most approachable.
              Frameworks can be very intimidating and nobody wants to spend a
              long time setting up a local development environment just to spin
              up a basic application.
            </p>
            <p>
              Vue is a progressive framework and that might sound like a bunch
              of marketing jargon to you but I promise you it isn’t. This means
              that you can get started using Vue quickly and easily and as your
              needs grow the framework will grow with you.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </section>
    <section id="latest-videos">
      <div class="container">
        <h3>Latest Videos</h3>
        <p>
          These are the latest videos from my YouTube channel, subscribe here to
          find out when I release a new one.
        </p>
        <p>Current Subscriber Count: 8,000</p>
        <div class="latest-videos-wrapper">
          <ul>
            <li>Groovy Dynamic Methods</li>
            <li>Groovy Dynamic Methods</li>
            <li>Groovy Dynamic Methods</li>
            <li>Groovy Dynamic Methods</li>
            <li>Groovy Dynamic Methods</li>
          </ul>
          <div>
            <g-image src="../assets/img/latest-videos-banner.png" alt />
          </div>
        </div>
      </div>
    </section>
    <layout-footer />
  </div>
</template>

<script>
import LayoutNavigation from "@/components/LayoutNavigation.vue";
import LayoutFooter from "@/components/LayoutFooter.vue";
import Convertkit from "@/components/ConvertKit";

export default {
  components: {
    LayoutNavigation,
    LayoutFooter,
    Convertkit
  },
  meta: [
    { name: "author", content: "Dan Vega" },
    {
      name: "description",
      content: "This is the personal blog of Dan Vega."
    },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:description", content: "The personal blog of Dan Vega" },
    { name: "twitter:title", content: "Dan Vega" },
    { name: "twitter:site", content: "@therealdanvega" },
    {
      name: "twitter:image",
      content: `${process.env.GRIDSOME_BASE_URL}/images/danvega_dev_cover.png`
    },
    { name: "twitter:creator", content: "@therealdanvega" }
  ],
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

<page-query>
query Posts {
  recentPosts: allPost(perPage: 3) {
    edges {
      node {
        id
        title
        excerpt
        cover
        path
        date(format: "MMMM DD, YYYY")
        timeToRead
      }
    }
  }
}
</page-query>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  background: no-repeat url(../assets/img/home-header-bg.png);
  background-position: top center;
}

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
  margin-top: 80px;
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

#latest-videos {
  margin-bottom: 20px;
}
.latest-videos-wrapper {
  display: flex;
}

.latest-videos-wrapper ul {
  flex: 1;
  margin: 0;
  padding: 0;
}
.latest-videos-wrapper ul li {
  list-style-type: none;
}

#latest-videos p {
  color: black;
  font-size: 1.1rem;
  margin-top: 0px;
}

form {
  margin-top: 20px;
}

form input {
  padding: 10px;
  width: 75%;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 20px;
}

#cards {
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 20px;
}
.card {
  border: 1px solid lightgray;
}
.card-content {
  padding: 10px;
}
.card-content h4 {
  font-family: "Oswald", sans-serif;
  text-transform: uppercase;
  color: #4a4a4a;
}
.card-content p {
  font-size: 1.1rem;
  color: black;
}
.card-cover {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center center;
}
.card-footer {
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  padding: 10px;
  font-family: "Roboto Slab", serif;
  font-weight: 300;
  font-size: 0.9rem;
}
.card-footer .date {
  flex: 1;
}
</style>
