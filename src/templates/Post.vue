<template>
  <Layout>
    <div class="article content">
      <h1 class="title is-2 article-title">{{ $page.post.title }}</h1>
      <small class="about">{{ formatCreatedOn }} • ☕️ {{ $page.post.timeToRead }} min read</small>
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
      <g-image v-if="!$page.post.video && $page.post.cover" :src="$page.post.cover" class="cover" />
      <article v-html="$page.post.content" class="article" />
      <bulma-tag :tags="$page.post.tags" />
      <convert-kit uid="44cc02ed05" script="https://f.convertkit.com/44cc02ed05/38739557e4.js"></convert-kit>
      <VueRemarkContent/>
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
      script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
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
      console.log(process.env.GRIDSOME_BASE_URL);
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
  /* max-width: 1000px; */
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
</style>
