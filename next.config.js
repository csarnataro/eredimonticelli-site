require('dotenv').config()
const nextBuildId = require('next-build-id')

module.exports = {
  env: {
    // EMAIL references a variable that was defined in the .env file 
    // and make it available at Build Time
    EMAIL: process.env.EMAIL,
    BUILD_DIR: __dirname,
    BUILD_ID: nextBuildId.sync().substr(0,8)
  },
  generateBuildId: () => nextBuildId({ dir: __dirname }),
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