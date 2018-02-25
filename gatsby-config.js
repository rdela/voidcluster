module.exports = {
  siteMetadata: {
    author: `Ricky de Laveaga`,
    blogTitle: `way as void`,
    description: `way as void`,
    github: `@rdela/voidcluster`,
    siteUrl: `https://voidcluster.com/`,
    title: `voidcluster`,
    twitter: `@voidcluster`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `voidcluster`,
        short_name: `voidcluster`,
        icons: [
          {
            src: `/favicons/voidcluster-192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/favicons/voidcluster-512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#005864`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
}
