<template>
  <Layout>
    <div class="article content">
      <h1 class="title is-2 article-title">{{ $page.post.title }}</h1>
      <small class="about">📅 {{ formatCreatedOn }} • ☕️ {{ $page.post.timeToRead }} min read • 👨‍💻 {{$page.post.author}} </small>
      <g-image v-if="$page.post.cover" :src="$page.post.cover" class="cover"/>
      <article v-html="$page.post.content" class="article"/>
      <div id="convertkit" align="center"></div>
    </div>
    <!--
    <div class="comments">
      <h2 class="title is-3">Comments</h2>
      <div id="disqus_thread"></div>         
    </div>
    -->
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
    author
  }
}
</page-query>

<script>
import moment from 'moment'

export default {
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        // twitter-card: https://cards-dev.twitter.com/validator
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:description', content: this.$page.post.excerpt },
        { name: 'twitter:title', content: this.$page.post.title },
        { name: 'twitter:site', content: '@therealdanvega' },
        { name: 'twitter:image', content: `${this.getBaseUrl}${this.$page.post.cover.src}` },
        { name: 'twitter:creator', content: '@therealdanvega' },
        // open-graph
        { property: 'og:updated_time', content: this.$page.post.date },
        { property: 'og:image', content: `${this.getBaseUrl}${this.$page.post.cover.src}`  },
        { property: 'og:image:secure_url', content: this.$page.post.cover.src  }
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

    // diqus
    /*
    const disqus_config = function () {
      page.url = window.location.href;
      page.identifier = this.$page.post.slug;
    };

    const d = document, s = d.createElement('script');
    s.src = 'https://danvegame.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
        */

  },
  computed: {
    formatCreatedOn() {
      const formattedDate = moment(this.$page.post.date).format('MMMM DD, YYYY');
      return formattedDate;
    },
    getBaseUrl() {
      return window.location.protocol + "//" + window.location.host;
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
</style>
