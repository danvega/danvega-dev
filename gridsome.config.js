// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Dan Vega",
  siteUrl: "http://localhost:8080",
  siteDescription: "Person blog of Dan Vega",
  icon: "src/img/danvega-favicon.png",
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        route: '/blog/:slug',
        resolveAbsolutePaths: true,
        remark: {
          autolinkClassName: 'fas fa-hashtag',
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
          plugins: [
            // | quietlight | Material-Theme-Default 
            [ 'gridsome-plugin-remark-shiki', { theme: 'nord' } ],
            [ 'gridsome-plugin-remark-twitter', {} ]
          ]
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