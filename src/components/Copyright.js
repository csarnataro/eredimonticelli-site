import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '../../src/Link'
import { getLinkAlias } from '../utils/getLinkAlias'

const getRevision = () => {
  if (process.env.COMMIT_SHA) {
    return (
      <small style={{ float: 'right' }}>rev: {process.env.COMMIT_SHA.toString().substr(0, 8)}</small>
    )
  }
  return ''
}

export default function Copyright () {
  return (
    <Typography variant='body2' color='secondary' align='center'>
      {'Copyright '}
      {new Date().getFullYear()}
      {' © - '}
      <Link color='inherit' href='/index' as='/'>
        www.eredimonticelli.it
      </Link>
      {' - '}
      <Link
        color='inherit'
        href='/it/privacy-policy'
        as={getLinkAlias('/it/privacy-policy')}
      >
        Privacy policy
      </Link>
      {getRevision()}
    </Typography>
  )
}
