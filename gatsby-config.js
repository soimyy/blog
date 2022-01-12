const path = require("path");

/**
 */
module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    siteUrl: "https://soimyy.github.io",
    title: "soimyy blog",
    description: `soimyy blog`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve(`./src/layouts/index.jsx`),
        // component: require.resolve(`./relative/path/to/layout/component`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/data/article`,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-M4CWWNB",
        includeInDevelopment: false,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        layouts: path.join(__dirname, "src", "layouts"),
        pages: path.join(__dirname, "src", "pages"),
        partials: path.join(__dirname, "src", "partials"),
        components: path.join(__dirname, "src", "components"),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
          {
            resolve: "gatsby-remark-code-buttons",
          },
        ],
      },
    },
  ],
};
