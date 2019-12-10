/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    'gatsby-theme-material-ui',
    {
      resolve: 'gatsby-plugin-mdx',
      // extensions: ['.mdx'],
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/MainLayout.js')
        }
      }
    }
  ]
}
