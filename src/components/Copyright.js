import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright '}{new Date().getFullYear()}{' © - '}
      <Link color="inherit" href="/" as="/index.html">
        www.eredimonticelli.it
      </Link>
      <small style={{float: 'right'}}>rev: {process.env.BUILD_ID}</small>
    </Typography>
  );
}
