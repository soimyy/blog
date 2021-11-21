module.exports = {
  pathPrefix: `/blog`,
  siteMetadata: {
    siteUrl: "https://soimyy.github.io/",
    title: "soimyy blog",
    description: `soimyy blog`,
  },
  plugins: [
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
        // resolveModules: [path.join(__dirname, "libs")],
        // utils: path.join(__dirname, "src", "components", "utilities"),
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
