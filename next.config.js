module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ['it', 'en'],
    defaultLocale: 'it',
    localeDetection: false,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index',
      },
      {
        source: '/en',
        destination: '/en/index',
        locale: false,
      },
      {
        source: '/it',
        destination: '/it/index',
        locale: false,
      },
      {
        source: '/it',
        destination: '/index',
        locale: false,
      },
    ]
  },
}
