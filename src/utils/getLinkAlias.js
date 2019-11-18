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
    // in prod, if alias is specified, it's used as is
    case alias !== undefined:
      return alias
    // in prod, if href is a 'real' page (i.e. not '/'), html is appended
    case !href.endsWith('/'):
      return `${href}.html`
    default:
      return href
  }
}

export { getLinkAlias }
