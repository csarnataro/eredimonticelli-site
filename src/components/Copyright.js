import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const showEnv = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('************ BEGIN: Copyright 7 ************')
    console.dir(process.env.BUILD_ID, { colors: true, depth: 16 })
    console.log('************ END:   Copyright 7 ************')
    return <Typography variant="body2" display="inline">
      - rev: {JSON.stringify(process.env.BUILD_ID.id)}
    </Typography>
  }
}

export default () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright '}{new Date().getFullYear()}{' © - '}
      <Link color="inherit" href="/" as="/index.html">
        www.eredimonticelli.it
      </Link>
      {' '}{showEnv()}

    </Typography>
  );
}
