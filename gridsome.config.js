// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const nodeExternals = require('webpack-node-externals')

const collections = [{
  contentTypeName: 'Post',
  indexName: 'blog_posts',
  itemFormatter: (item) => {
    return {
      objectID: item.id,
      slug: item.slug,
      title: item.title,
      date: String(item.date),
      tags: item.tags,
      modified: item.modified ? String(item.modified) : String(item.date),
      excerpt: item.excerpt,
    }
  },
  matchFields: ['slug', 'modified']
}, ];

module.exports = {
  siteName: "Dan Vega",
  siteUrl: "https://www.danvega.dev",
  siteDescription: "Person blog of Dan Vega",
  icon: "src/img/danvega-favicon.png",

  chainWebpack(config, {
    isServer
  }) {

    if (isServer) {
      config.externals(nodeExternals({
        whitelist: [
          /\.css$/,
          /\.sass$/,
          /\?vue&type=style/,
          /vue-instantsearch/,
          /instantsearch.js/
        ]
      }))
    }
  },

  plugins: [{
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:year/:month/:day/:slug',
        refs: {
          tags: {
            typeName: 'Tag',
            route: '/tag/:slug',
            create: true
          }
        },
        resolveAbsolutePaths: true,
        remark: {
          autolinkClassName: 'fas fa-hashtag',
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          plugins: [
            ['gridsome-plugin-remark-shiki', {
              theme: 'nord'
            }],
            ['gridsome-plugin-remark-twitter', {}],
            ['gridsome-plugin-remark-codesandbox', {}]
          ]
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        feedOptions: {
          title: 'Dan Vega',
          feed_url: 'https://danvega.dev/rss.xml',
          site_url: 'https://danvega.dev'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.excerpt,
          url: getPostURL(node.fields.date, node.slug),
          author: node.fields.author,
          date: node.fields.date,
          custom_elements: [{
            published: node.fields.date.toString(),
          }, ]
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000, // default
        config: {
          '/blog/*': {
            changefreq: 'daily',
            priority: 0.5
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-133826656-1'
      }
    },
    {
      use: `gridsome-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        collections,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: false, // default: false
      },
    },
  ]
}

function getPostURL(date, slug) {
  const createdOn = new Date(date);
  const year = createdOn.getFullYear()
  const month = `${createdOn.getMonth() + 1 < 10 ? "0" : ""}${createdOn.getMonth() + 1}`
  const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`
  return `https://www.danvega.dev/blog/${year}/${month}/${day}/${slug}`;
}
