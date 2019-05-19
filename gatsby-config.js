module.exports = {
  siteMetadata: {
    title: `Vinylbase ❤️ Gatsby + GraphQL + GraphCMS`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-graphql`,
      options: {
        // This type will contain remote schema Query type
        typeName: "Vinylbase",
        // This is field under which it's accessible
        fieldName: "vb",
        // URL to query from
        url: "https://api.graphcms.com/simple/v1/vinylbase"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vinylbase ❤️ Gatsby + GraphQL + GraphCMS`,
        short_name: `Vinylbase`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#61045f`,
        display: `standalone`,
        icons: [
          {
            src: `/favicons/chrome-192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/favicons/chrome-512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    `gatsby-plugin-offline`
  ]
};
