require('dotenv').config()

module.exports = {
  env: {
    // EMAIL references a variable that was defined in the .env file
    // and make it available at Build Time
    EMAIL: process.env.EMAIL,
    COMMIT_SHA: process.env.COMMIT_SHA
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        use: 'raw-loader'
      }
    )

    return config
  }
}
