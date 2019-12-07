import Typography from '@material-ui/core/Typography'
import { Link } from 'gatsby-theme-material-ui'
import React from 'react'
import Obfuscate from 'react-obfuscate'
import PhotoGallery from './PhotoGallery'

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const MdxLink = props => <Link to={props.href} style={{ textDecoration: 'underline' }} {...props}/>
const MdxH1 = props => <Typography gutterBottom variant='h4' {...props} />
const MdxH2 = props => <Typography gutterBottom variant='h6' {...props} />
const MdxParagraph = props => <Typography paragraph {...props} />
const MdxListItem = props => <li>
  <Typography gutterBottom component='div' {...props} />
</li>
const ObfuscateComponent = () => <Obfuscate email={process.env.EMAIL} />

export default {
  a: MdxLink,
  h1: MdxH1,
  h2: MdxH2,
  p: MdxParagraph,
  li: MdxListItem,
  PhotoGallery,
  Email: ObfuscateComponent
}

/*
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
          <Typography component='div' {...props} />
        </li>
      ))
    }
  }
}
*/
