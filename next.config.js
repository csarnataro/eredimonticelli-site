require('dotenv').config()
const nextBuildId = require('next-build-id')

module.exports = {
  env: {
    // Reference a variable that was defined in the .env file and make it available at Build Time
    EMAIL: process.env.EMAIL,
    BUILD_ID: {
      id: nextBuildId({ dir: __dirname, describe: true, fallbackToSha: true })
    }
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
  exportPathMap: async function(
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/index.html': { page: '/index' },
      '/it/contatti.html': { page: '/it/contatti' },
      '/it/dove-siamo.html': { page: '/it/contatti' },
      '/it/metodo.html': { page: '/it/metodo' },
      '/it/mobili-per-agriturismo.html': { page: '/it/mobili-per-agriturismo' },
      '/it/tranciati-in-legno.html': { page: '/it/tranciati-in-legno' }
    }
  },  
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  },
}