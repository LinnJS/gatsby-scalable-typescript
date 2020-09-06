module.exports = {
  siteMetadata: {
    title: `Gatsby Scalable Starter`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Scalable Starter`,
        short_name: `Gatsby Scalable`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#744C9E`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets/svgs`,
        name: `svgs`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-root-import`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
};
