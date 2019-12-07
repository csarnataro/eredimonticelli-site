import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import React from 'react'
import ImgMediaCard from './ImgMediaCard'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  caption: {
    margin: theme.spacing(1, 0)
  },
  container: {
    padding: theme.spacing(2, 4),
    flexGrow: 1
  },
  thumbnail: {
    borderRadius: '8px',
    padding: theme.spacing(1),
    width: '100%',
    border: '1px solid lightgray'
  }
}))

function GalleryItem ({ imageUrl, title }) {
  return (
    <Grid item md={4}>
      <ImgMediaCard image={imageUrl} title={title} />

      {/*
      <a href={imageUrl} data-attribute="SRL">
        <img src={thumbnailUrl} className={classes.thumbnail} alt={title} />
      </a>
      */}
    </Grid>
  )
}

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string
}

GalleryItem.defaultProps = {
  title: 'No title'
}

export default function PhotoGallery ({ children }) {
  const classes = useStyles()

  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <Container fixed maxWidth="md" className={classes.container}>
          <Grid container spacing={3}>
            {children.map(item =>
              <GalleryItem key={item[0]} {...{ imageUrl: item[0], title: item[1] }} />
            )}
          </Grid>
        </Container>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}

PhotoGallery.propTypes = {
  children: PropTypes.array
}
