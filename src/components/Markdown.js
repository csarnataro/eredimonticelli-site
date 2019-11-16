import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ReactMarkdown from 'markdown-to-jsx'
import PropTypes from 'prop-types'
import React from 'react'
import Obfuscate from 'react-obfuscate'
import Link from '../Link'
import { getLinkAlias } from '../utils/getLinkAlias'

const styles = theme => ({
  listItem: {
    marginTop: theme.spacing(1)
  }
})

const ObfuscateComponent = () => <Obfuscate email={process.env.EMAIL} />

const LinkComponent = ({ ...props }) => <Link {...props} as={getLinkAlias(props.href)} />
LinkComponent.propTypes = {
  href: PropTypes.string.isRequired
}

const options = {
  overrides: {
    Email: {
      // eslint-disable-next-line react/display-name
      component: ObfuscateComponent
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
    a: {
      component: LinkComponent
    },
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
