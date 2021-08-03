import PropTypes from 'prop-types'
import React from 'react'
import ImgMediaCard from './ImgMediaCard'
import SimpleReactLightbox, { SRLWrapper } from 'simple-react-lightbox'

function GalleryItem ({ imageUrl, title }: any) {
  return (
    <div>
      <ImgMediaCard image={imageUrl} title={title} />

      {/*
      <a href={imageUrl} data-attribute="SRL">
        <img src={thumbnailUrl} className={classes.thumbnail} alt={title} />
      </a>
      */}
    </div>
  )
}

GalleryItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string
}

GalleryItem.defaultProps = {
  title: 'No title'
}

export default function PhotoGallery ({ children }: any) {

  return (
    <SimpleReactLightbox>
      <SRLWrapper>
        <div>
          <div>
            {children.map((item: any) =>
              <GalleryItem key={item[0]} {...{ imageUrl: item[0], title: item[1] }} />
            )}
          </div>
        </div>
      </SRLWrapper>
    </SimpleReactLightbox>
  )
}

PhotoGallery.propTypes = {
  children: PropTypes.array
}
