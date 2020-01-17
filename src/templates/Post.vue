<template>
  <Layout>
    <div class="article content">
      <h1 class="title is-2 article-title">{{ $page.post.title }}</h1>
      <small class="about"
        >{{ formatCreatedOn }} • ☕️ {{ $page.post.timeToRead }} min read</small
      >
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
      />
      <article v-html="$page.post.content" class="article" />
      <bulma-tag :tags="$page.post.tags" />
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
          <g-image src="../assets/img/about_me_circle-300x295.png" />
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
    </div>
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
import BulmaTag from "@/components/BulmaTag";
import ConvertKit from "@/components/ConvertKit";
import mediumZoom from "medium-zoom";

export default {
  components: {
    BulmaTag,
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
      script: [{ src: "https://platform.twitter.com/widgets.js" }]
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
.cover {
  margin-top: 10px;
}
.article {
  margin-top: 20px;
  /* margin-bottom: 60px; */
}
.article h2 {
  margin: 20px 0 10px 0 !important;
}
.article-title {
  margin-bottom: 0px !important;
}
.icon.icon-link {
  display: none;
}
a > span.fas.fa-hashtag {
  color: rgb(100, 100, 100) !important;
}
.shiki-inline {
  background: #eeeeee !important;
  padding: 2px;
  color: #ff4e46 !important;
}
.twitter-tweet {
  margin: 30px auto !important;
}
.g-image {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.shiki {
  margin: 20px 0px !important;
  font-size: 11px !important;
}
.article .fa-youtube {
  color: red;
  margin: 0 5px 0 0;
}
.article iframe {
  height: 563px !important;
}
.embed-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
}
.embed-container iframe,
.embed-container object,
.embed-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.followme {
  text-align: center;
  background-color: rgb(242, 242, 242);
  padding: 10px;
}
.author {
  display: flex;
  margin: 40px 0;
}
.author p {
  font-family: "Roboto Slab";
  font-size: 22px;
  font-weight: 300;
  color: #3d455c;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  line-height: 1.6;
}
.author h3 {
  font-size: 27px;
  border-bottom: 1px solid #f2f3f3;
  padding-bottom: 5px;
}
.bio {
  padding: 0 30px;
}
.avatar {
  width: 90%;
}
.avatar img {
  border-radius: 50%;
  padding: 5px;
  border: 2px solid #eeeeee;
}
#convertkit {
  margin: 15px;
}
</style>
