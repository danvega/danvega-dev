<template>
  <Layout>
    <div class="article content">
      <h1 class="title is-2 article-title">{{ $page.post.title }}</h1>
      <small class="about">📅 {{ formatCreatedOn }} • ☕️ {{ $page.post.timeToRead }} min read</small>
      <g-image v-if="$page.post.cover" :src="$page.post.cover" class="cover"/>
      <article v-html="$page.post.content" class="article"/>
      <div id="convertkit" align="center"></div>
    </div>
    <!-- <bulma-tag :tags="$page.post.tags"/> -->
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    timeToRead,
    tags,
    cover,
    slug,
    date,
    author,
    excerpt
  }
}
</page-query>

<script>
import moment from 'moment'
import BulmaTag from '@/components/BulmaTag'

export default {
  components: {
    BulmaTag
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        { name: 'description', content: this.$page.post.excerpt },
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: this.$page.post.excerpt },
        { name: 'twitter:title', content: this.$page.post.title },
        { name: 'twitter:site', content: '@therealdanvega' },
        { name: 'twitter:image', content: this.getCoverImage },
        { name: 'twitter:creator', content: '@therealdanvega' },
        // open-graph
        { property: 'og:updated_time', content: this.$page.post.date },
        { property: 'og:image', content: this.getCoverImage },
        { property: 'og:image:secure_url', content: this.getCoverImage  }
      ],
      script: [
        { src: 'https://platform.twitter.com/widgets.js', async: true }
      ]
    };
  },
  mounted() {
    // converkit
    let converkit = document.createElement('script');
    converkit.setAttribute('src', 'https://f.convertkit.com/44cc02ed05/38739557e4.js');
    converkit.setAttribute('data-uid','44cc02ed05');
    document.getElementById('convertkit').appendChild(converkit);
  },
  computed: {
    formatCreatedOn() {
      const formattedDate = moment(this.$page.post.date).format('MMMM DD, YYYY');
      return formattedDate;
    },
    getCoverImage() {
      let coverImage = '';
      const cover = this.$page.post.cover;
      if( cover != null ) {
        coverImage = `${this.getBaseUrl}${this.$page.post.cover.src}`
      }
      return coverImage;
    },
    getBaseUrl() {
      return process.env.GRIDSOME_BASE_URL;
    }
  }
};
</script>

<style>
.cover {
  margin-top:10px;
}
.article {
  margin-top:20px;
}
.article h2 {
  margin: 20px 0 10px 0 !important;
}
.article-title {
  margin-bottom:0px !important;
}
.icon.icon-link {
  display: none;
}
#convertkit {
  margin: 40px 0 0 0;
  width:100% !important;
}
a > span.fas.fa-hashtag {
  color: rgb(100, 100, 100) !important;
}
.shiki-inline {
  background: #EEEEEE !important;
  padding:2px;
  color:#FF4E46 !important;
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
</style>
