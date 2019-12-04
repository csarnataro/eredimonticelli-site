require('dotenv').config()
// const nextBuildId = require('next-build-id')
// next.config.js
const fs = require('fs')
const cp = require('child_process')

const generateBuildId = () => {
  if (!fs.existsSync('git-commit-hash')) {
    cp.execSync('git rev-parse HEAD > git-commit-hash')
  }
  const gitCommitHash = fs.readFileSync('git-commit-hash', { encoding: 'utf-8' })

  return gitCommitHash.substr(0, 8)
}

module.exports = {
  env: {
    // EMAIL references a variable that was defined in the .env file
    // and make it available at Build Time
    EMAIL: process.env.EMAIL,
    BUILD_DIR: __dirname,
    BUILD_ID: generateBuildId()
  },
  generateBuildId: () => generateBuildId(),
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
