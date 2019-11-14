import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import data from '../../data/it/dove-siamo.md'
import MainLayout from '../../src/components/MainLayout'
import Markdown from '../../src/components/Markdown'

const useStyles = makeStyles(theme => ({
  markdown: {
    padding: theme.spacing(1)
  },
  container: {
    padding: theme.spacing(0, 2)
  },
  thumbnail: {
    borderRadius: '8px',
    padding: theme.spacing(1),
    border: '1px solid lightgray'
  }
}))

export default function Furnitures () {
  const classes = useStyles()

  return (
    <MainLayout pageType='where'>
      <Container fixed maxWidth='md' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item md={6}>
            Eredi di Monticelli Angelo<br />
            Via XXV Aprile 11<br />
            23819 Primaluna (LC) - ITALY<br />
    <iframe
    width="100%"
    height="400"
    frameBorder="0"
    scrolling="no"
    marginHeight="0"
    marginWidth="0"
    src="http://maps.google.it/maps?f=d&amp;hl=it&amp;geocode=18146798009793306119,45.978370,9.441741&amp;saddr=45.97837,9.441741&amp;daddr=&amp;mra=ps&amp;mrcr=0&amp;sll=45.917005,9.452705&amp;sspn=0.148803,0.32135&amp;ie=UTF8&amp;t=p&amp;s=AARTsJpVNgtpMnpx4ZsRBEym7jx_Vdsykg&amp;ll=45.803914,9.387817&amp;spn=0.765875,0.76355&amp;z=9&amp;output=embed"
    ></iframe>
    <br />
    <small>
      <a target="_BLANK" href="http://maps.google.it/maps?f=d&amp;hl=it&amp;geocode=18146798009793306119,45.978370,9.441741&amp;saddr=45.97837,9.441741&amp;daddr=&amp;mra=ps&amp;mrcr=0&amp;sll=45.917005,9.452705&amp;sspn=0.148803,0.32135&amp;ie=UTF8&amp;ll=45.94924,9.330139&amp;spn=0.381937,0.381775&amp;z=10&amp;source=embed" style={{textAlign: 'left'}}>Visualizzazione ingrandita della mappa</a>
    </small>

          </Grid>
          <Grid item md={6}>
            <Markdown className={classes.markdown}>{data}</Markdown>
          </Grid>
        </Grid>
      </Container>
    </MainLayout>
  )
}
