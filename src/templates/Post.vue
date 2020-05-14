<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <p class="postDateTime">
      {{ formatCreatedOn }} • ☕️ {{ $page.post.timeToRead }} min read
    </p>
    <div class="embed-container" v-if="$page.post.video">
      <iframe
        width="1000"
        height="563"
        :src="$page.post.video"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        v-if="$page.post.video"
      ></iframe>
    </div>
    <g-image
      v-if="!$page.post.video && $page.post.cover"
      :src="$page.post.cover"
      class="cover"
      :alt="$page.post.title"
    />
    <article v-html="$page.post.content" class="article" />
    <blog-tag :tags="$page.post.tags" />

    <div class="followme">
      Follow me on
      <a href="http://twitter.com/therealdanvega">Twitter</a>,
      <a href="https://www.linkedin.com/in/danvega/">LinkedIn</a>, or sign up
      for my <a href="/newsletter">newsletter</a>.
      <convert-kit
        uid="44cc02ed05"
        script="https://f.convertkit.com/44cc02ed05/38739557e4.js"
      ></convert-kit>
    </div>
    <div class="author">
      <div class="avatar">
        <g-image
          src="../assets/img/about_me_circle-300x295.png"
          alt="Dan Vega"
        />
      </div>
      <div class="bio">
        <h3>Dan Vega</h3>
        <p>
          I’m a Husband, Father, Curriculum Developer and maker of things from
          Cleveland Ohio. I created this website as a place to document my
          journey as I learn new things and share them with you. I have a real
          passion for teaching and I hope that one of blog posts, videos or
          courses helps you solve a problem or learn something new.
        </p>
      </div>
    </div>

    <vue-disqus
      shortname="danvega-dev"
      :identifier="$page.post.title"
    ></vue-disqus>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    timeToRead
    cover
    video
    slug
    date
    excerpt
    path
    tags {
      id
      title
      path
    }
  }
}
</page-query>

<script>
import moment from "moment";
import BlogTag from "@/components/BlogTag";
import ConvertKit from "@/components/ConvertKit";
import mediumZoom from "medium-zoom";

export default {
  components: {
    BlogTag,
    ConvertKit
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: "description", content: this.$page.post.excerpt },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:description", content: this.$page.post.excerpt },
        { name: "twitter:title", content: this.$page.post.title },
        { name: "twitter:site", content: "@therealdanvega" },
        { name: "twitter:image", content: this.getCoverImage },
        { name: "twitter:creator", content: "@therealdanvega" },
        { property: "og:type", content: "article" },
        { property: "og:title", content: this.$page.post.title },
        { property: "og:description", content: this.$page.post.excerpt },
        {
          property: "og:url",
          content: `${this.getBaseUrl}${this.$page.post.path}`
        },
        {
          property: "article:published_time",
          content: moment(this.$page.post.date).format("MM-DD-YYYY")
        },
        { property: "og:updated_time", content: this.$page.post.date },
        { property: "og:image", content: this.getCoverImage },
        { property: "og:image:secure_url", content: this.getCoverImage }
      ],
      script: [{ src: "https://platform.twitter.com/widgets.js" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://use.typekit.net/rfi8kwv.css"
        }
      ]
    };
  },
  computed: {
    formatCreatedOn() {
      const formattedDate = moment(this.$page.post.date).format(
        "MMMM DD, YYYY"
      );
      return formattedDate;
    },
    getCoverImage() {
      let coverImage = "";
      const cover = this.$page.post.cover;
      if (cover != null) {
        coverImage = `${this.getBaseUrl}${this.$page.post.cover.src}`;
      }
      return coverImage;
    },
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL;
    }
  },
  mounted() {
    import("medium-zoom").then(mediumZoom => {
      this.zoom = mediumZoom.default(".article img");
    });
  }
};
</script>

<style>
h1 {
  margin: 0;
}
.postDateTime {
  margin: 0 0 5px 0;
}
.cover {
  margin-top: 10px;
  max-width: 100%;
}
.article {
  margin-top: 20px;
}
.article img {
  max-width: 100%;
}
.fas.fa-hashtag {
  display: none; /* hides the hashtag next to each heading */
}
.shiki-inline {
  background: var(--shiki-inline-background) !important;
  padding: 2px;
  color: var(--shiki-inline-color) !important;
  font-size: 1.1rem;
}
.twitter-tweet {
  margin: 10px auto;
}
code {
  font-family: hack, sans-serif;
  font-weight: 400;
  font-style: normal;
  width: 100%;
}
.shiki {
  padding: 1rem;
}
.article .fa-youtube {
  color: red;
  margin: 0 5px 0 0;
}

.embed-container {
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  height: 0;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

.followme {
  text-align: center;
  background-color: rgb(242, 242, 242);
  padding: 10px;
}
.followme a:link,
.followme a:visited {
  color: var(--bright-blue);
}
.author {
  display: flex;
  margin: 40px 0;
}
.author p {
  margin: 0;
  padding: 0;
}
.author h3 {
  font-size: 1.8rem;
  border-bottom: 1px solid #f2f3f3;
  padding-bottom: 5px;
}
.bio {
  padding: 0 30px;
}
.avatar img {
  border-radius: 50%;
  padding: 5px;
  border: 2px solid #eeeeee;
}
#convertkit {
  margin: 15px;
}

table {
  width: 100%;
  border-spacing: 1rem;
}

th {
  text-align: left;
  font-weight: bold;
}

@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .author {
    flex-direction: column;
  }
  .bio p {
    font-size: 1rem;
  }
  .author .avatar {
    order: 2;
    align-self: center;
    margin: 10px 0;
  }
}

@media (max-width: 850px) {
  .bio {
    margin: 0;
    padding: 0;
  }
  pre.shiki {
    font-size: 0.8rem;
    max-width: 89vw;
    overflow-x: scroll;
  }
}
</style>
