<template>
  <Layout>
    <div class="content">
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <h1 class="title is-2">Hi, I’m Dan Vega.</h1>
          <p
            class="intro"
          >I’m a Husband, Father, Curriculum Developer and maker of things from Cleveland Ohio. I created this website as a place to document my journey as I learn new things and share them with you. I have a real passion for teaching and I hope that one of blog posts, videos or courses helps you solve a problem or learn something new.</p>
          <!-- <p>I'm a Software Developer, Curriculum Developer and life long learner from Cleveland Ohio.</p> -->
          <!-- <p>I created this site so that I could document the things that I learn or enjoy working with and help you avoid the mistakes that I make. If you enjoy my content please share it with your friends.</p> -->
        </div>
        <div class="column right-side">
          <g-image src="../assets/img/danvega-avatar.png" class="avatar" alt="Dan Vega Avatar" />
        </div>
      </div>
    </div>
    <h2 class="title is-3">Recent Blog Posts</h2>
    <div class="posts">
      <div v-for="post in $page.recentPosts.edges" :key="post.node.id" class="post">
        <g-link :to="post.node.path" :aria-label="post.node.title">
          <div class="overlay"></div>
          <g-image :src="post.node.cover.src" class="post-img" :alt="post.node.title" />
          <div class="post-details fadeIn-bottom">
            <h3 class="post-title">{{ post.node.title }}</h3>
            <p class="post-text">{{ post.node.date }} • ☕️ {{ post.node.timeToRead }} min read</p>
          </div>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allPost(perPage: 9) {
    edges {
      node {
        id
        title
        cover
        path,
        date(format: "MMMM DD, YYYY"),
        timeToRead
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Welcome to my website",
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
    ]
  }
};
</script>

<style>
.intro {
  line-height: 2.3rem;
}
.avatar {
  max-width: 200px;
  text-align: center;
  margin: 30px auto;
}
.right-side {
  text-align: center;
}
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  margin-bottom: 30px;
}

.post {
  position: relative;
  overflow: hidden;
}
.post:nth-child(1),
.post:nth-child(6),
.post:nth-child(7) {
  grid-column: span 2;
  grid-row: span 2;
}
.post:nth-child(6) {
  grid-column: 2/4;
  grid-row: 3/5;
}
.post:nth-child(4),
.post:nth-child(5) {
  grid-column: 1;
}
.post:nth-child(3),
.post:nth-child(5),
.post:nth-child(9) {
  display: flex;
  align-self: flex-end;
}
.post-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post .overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.post:hover .overlay {
  opacity: 1;
}
.post-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.post:hover .post-details {
  top: 50%;
  left: 50%;
  opacity: 1;
}

.post-details h3 {
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
}

.post-details p {
  color: #fff;
  font-size: 0.8em;
}

.fadeIn-bottom {
  top: 80%;
}
</style>
