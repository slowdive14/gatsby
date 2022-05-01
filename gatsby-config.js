module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/src/site/notes`,
        rootNote: `/Digital Garden of 잔향`,
      },
    },
    `gatsby-plugin-netlify`
  ],
  siteMetadata: {
    title: "잔향",
  },
}
