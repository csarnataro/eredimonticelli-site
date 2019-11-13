import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright '}{new Date().getFullYear()}{' © - '}
      <Link color="inherit" href="/">
        www.eredimonticelli.it
      </Link>
    </Typography>
  );
}
