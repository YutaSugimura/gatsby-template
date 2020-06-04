require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'gatsby-source-notionso example site',
    description:
      'series of article to explain how to use the gatsby-source-notionso plugin',
    basePath: '/',
  },
  plugins: [
    {
      resolve: 'gatsby-source-notionso',
      options: {
        name: 'Blog',
        rootPageUrl: process.env.ROOT_PAGE_URL,
        debug: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
};
