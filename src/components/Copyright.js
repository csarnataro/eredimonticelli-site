import React from 'react'
import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby-theme-material-ui'

const getRevision = () => {
  const rev = process.env.COMMIT_SHA
    ? process.env.COMMIT_SHA.toString().substr(0, 7)
    : 'dev'

  return (<small style={{ float: 'right' }}>rev:{rev}</small>)
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
        to={'/it/privacy-policy'}
      >
        Privacy policy
      </Link>
      {getRevision()}
    </Typography>
  )
}
