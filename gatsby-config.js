module.exports = {
  siteMetadata: {
    title: `GeoDataCap`,
    description: `GeoDataCap`,
    author: `@geodatacap`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ececec`,
        theme_color: `#ececec`,
        display: `minimal-ui`,
        icon: `src/images/geodatacap_logo.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 })
        ]
      }
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `r3lh3whfosd9`,
        accessToken: `ie4LSJoI0qzqaIrIQ9RitQfllg9rbxinz9eEunAIfSc`,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`pl`, `en`],
        // language file path
        defaultLanguage: `pl`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
