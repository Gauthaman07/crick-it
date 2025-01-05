/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  pathPrefix: "/crick-it",
  siteMetadata: {
    title: `CricKonnect`,
    siteUrl: `https://gauthaman07.github.io/crick-it`,
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/fvicon.png"
    }
  }]
};