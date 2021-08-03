import Link from 'next/link'
import React from 'react'
import { Obfuscate } from '@south-paw/react-obfuscate-ts';
import PhotoGallery from './PhotoGallery'

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
const MdxLink = (props: any) => <Link to={props.href} style={{ textDecoration: 'underline' }} {...props} />
const MdxH1 = (props: any) => <h4>{props}</h4>
const MdxH2 = (props: any) => <h6>{props}</h6>
const MdxParagraph = (props: any) => <p>{props}</p>
const MdxListItem = (props: any) => <li>
  <div>{props}</div>
</li>
const ObfuscateComponent = () => <Obfuscate email={process.env.EMAIL} />

const validMDXElement = {
  a: MdxLink,
  h1: MdxH1,
  h2: MdxH2,
  p: MdxParagraph,
  li: MdxListItem,
  PhotoGallery,
  Email: ObfuscateComponent
}

export default validMDXElement;

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
