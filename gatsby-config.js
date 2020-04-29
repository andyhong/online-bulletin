module.exports = {
  siteMetadata: {
    title: `Your Church`,
    description: `The weekly bulletin for Your Church`,
    author: `@yourchurch`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `bulletin`,
        path: `${__dirname}/content/bulletin`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `hub`,
        path: `${__dirname}/content/hub`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `config`,
        path: `${__dirname}/content/config`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`300`,`400`, `500`, `600`, `700`, `900`]
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        addPageHeaders: [
          `cache-control: public, max-age=0, must-revalidate`
        ], 
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Demo Church Bulletin`,
        short_name: `Demo Church`,
        start_url: `/`,
        background_color: `#f7f7f7`,
        theme_color: `#faae2b`,
        display: `minimal-ui`,
        icon: `src/images/logo.jpeg`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-identity`,
      options: {
        url: `https://churchkeydemo.netlify.app`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-netlify-cms`,
  ],
}
