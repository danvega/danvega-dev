<template>
  <Layout>
    <div class="content">
      <div class="columns is-centered">
        <div class="column is-two-thirds">
          <h1 class="title is-2">Hi, I’m Dan Vega.</h1>
          <p>I'm a Software Developer, Curriculum Developer and life long learner from Cleveland Ohio.</p>
          <p>I created this site so that I could document the things that I learn or enjoy working with and help you avoid the mistakes that I make. If you enjoy my content please share it with your friends.</p>
        </div>
        <div class="column right-side">
          <g-image src="../assets/img/danvega-avatar.png" class="avatar" alt="Dan Vega Avatar"/>
        </div>
      </div>
    </div>
    <h2 class="title is-3">Recent Blog Posts</h2>
    <div id="recent-posts" class="columns is-multiline is-centered" >
        <div class="column is-half" v-for="post in $page.recentPosts.edges" :key="post.node.id">
          <g-link :to="post.node.path" :aria-label="post.node.title">
            <g-image :src="post.node.cover.src" class="cover" :alt="post.node.title"/>
          </g-link>
        </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  recentPosts: allPost(perPage: 6) {
    edges {
      node {
        id
        title
        cover(width:400)
        path
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
.avatar {
  max-width: 200px;
  text-align: center;
  margin: 30px auto;
}
.right-side {
  text-align: center;
}
#recent-posts .column {
  text-align:center !important;
}
#recent-posts h2 a:link,
#recent-posts h2 a:visited {
  color: #2e2e2e;
}
img.cover {
  border-radius: 4px;
}
</style>
