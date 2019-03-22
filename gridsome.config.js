// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Dan Vega",
  siteUrl: "https://www.danvega.me",
  siteDescription: "Person blog of Dan Vega",
  icon: "src/img/danvega-favicon.png",
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
            ['gridsome-plugin-remark-twitter', {}]
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
            published: node.fields.date,
          }, ]
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-133826656-1'
      }
    }
  ]
}

function getPostURL(date, slug) {
  const createdOn = new Date(date);
  const year = createdOn.getFullYear()
  const month = `${createdOn.getMonth() + 1 < 10 ? "0" : ""}${createdOn.getMonth() + 1}`
  const day = `${createdOn.getDate() < 10 ? "0" : ""}${createdOn.getDate()}`
  return `https://www.danvega.dev/blog/${year}/${month}/${day}/${slug}`;
}
