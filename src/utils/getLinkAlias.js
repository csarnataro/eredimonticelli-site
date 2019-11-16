/**
 *
 * @param {*} href
 * @param {*} alias optional, if provided will be returned
 */
const getLinkAlias = (href, alias) => {
  switch (true) {
    // in development env, no manipulation of links
    case process.env.NODE_ENV === 'development':
      return alias || href
    case alias !== undefined:
      return alias
    case !href.endsWith('/'):
      return `${href}.html`
    default:
      return href
  }
}

export { getLinkAlias }
