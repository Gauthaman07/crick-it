/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/crick-it",
  siteMetadata: {
    title: `Crickonnect - Cricket Match Booking & Team Management`,
    description: `Cricket match booking and team management made simple, powerful, and organized. Built for captains who want complete control of their game.`,
    author: `Crickonnect`,
    siteUrl: `https://crickonnect.com`,
    social: {
      instagram: `https://www.instagram.com/cric_konnect_?igsh=MWhrZHZnMDRkaWE4OA==`,
      youtube: `https://www.youtube.com/@Crick_connect10`,
    },
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Crickonnect',
        short_name: 'Crickonnect',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#d32f2f',
        display: 'standalone',
        icon: 'src/images/fvicon.png',
        icon_options: {
          purpose: 'any maskable',
        },
        description: 'Cricket match booking and team management platform',
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        output: '/',
        excludes: [],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
            allSitePage {
              nodes {
                path
              }
            }
          }
        `,
        resolveSiteUrl: () => 'https://crickonnect.com',
        resolvePages: ({
          allSitePage: { nodes: allPages },
        }) => {
          return allPages.map(page => {
            return { ...page }
          })
        },
        serialize: ({ path }) => {
          let priority = 0.7
          let changefreq = 'weekly'

          // Homepage
          if (path === '/') {
            priority = 1.0
            changefreq = 'daily'
          }
          // Main pages
          else if (path.match(/^\/(matches|tournaments|blog)\/?$/)) {
            priority = 0.9
            changefreq = 'daily'
          }
          // Blog posts
          else if (path.includes('/blog/')) {
            priority = 0.8
            changefreq = 'monthly'
          }
          // Other pages
          else {
            priority = 0.6
            changefreq = 'monthly'
          }

          return {
            url: path,
            changefreq: changefreq,
            priority: priority,
          }
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://crickonnect.com',
        sitemap: 'https://crickonnect.com/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ]
};