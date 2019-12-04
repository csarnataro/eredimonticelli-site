import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '../../src/Link'

export default function Copyright () {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright '}{new Date().getFullYear()}{' © - '}
      <Link color="inherit" href="/index" as="/">
        www.eredimonticelli.it
      </Link>{' - '}
      <Link color="inherit" href="/it/privacy-policy" as="/it/privacy-policy">
        Privacy policy
      </Link>
      <small style={{ float: 'right' }}>rev: {process.env.COMMIT_SHA}</small>
    </Typography>
  )
}
