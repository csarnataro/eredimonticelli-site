import React from 'react'
import ReactMarkdown from 'markdown-to-jsx'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Obfuscate from 'react-obfuscate'
import Link from '../../src/Link'

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1)
  }
})

const options = {
  overrides: {
    Email: {
      component: () => <Obfuscate email={process.env.EMAIL} />
    },
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4'
      }
    },
    h2: { component: Typography, props: { gutterBottom: true, variant: 'h6' } },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'subtitle1' }
    },
    h4: {
      component: Typography,
      props: { gutterBottom: true, variant: 'caption', paragraph: true }
    },
    p: { component: Typography, props: { paragraph: true } },
    a: { component: ({ ...props }) => <Link {...props} /> },
    li: {
      component: withStyles(styles)(({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component='span' {...props} />
        </li>
      ))
    }
  }
}

export default function Markdown (props) {
  return <ReactMarkdown options={options} {...props} />
}
