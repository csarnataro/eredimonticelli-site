import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from '../../src/Link'

export default function Copyright () {
  return (
    <Typography variant="body2" color="secondary" align="center">
      {'Copyright '}{new Date().getFullYear()}{' © - '}
      <Link color="inherit" href="/index" as="/">
        www.eredimonticelli.it
      </Link>
      <small style={{ float: 'right' }}>rev: {process.env.BUILD_ID}</small>
    </Typography>
  )
}
