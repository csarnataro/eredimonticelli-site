import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import data from "../../data/it/mobili-per-agriturismo.md";
import MainLayout from "../../src/components/MainLayout";
import Markdown from "../../src/components/Markdown";

const useStyles = makeStyles(theme => ({
  markdown: {
    padding: theme.spacing(2)
  },
  container: {
    padding: theme.spacing(0, 6)
  },
  thumbnail: {
    borderRadius: '8px',
    padding: theme.spacing(1),
    border: '1px solid lightgray'
  }
}));

function GalleryItem ({imageUrl, title}) {
  const classes = useStyles();

  const thumbnailUrl = imageUrl.replace('_b', '_s')
  return (
    <Grid item md={4}>
      <a href={imageUrl} data-attribute="SRL">
        <img src={thumbnailUrl} className={classes.thumbnail} alt={title} />
      </a>
    </Grid>
  )
}

export default function Furnitures() {
  const classes = useStyles();

  return (
    <MainLayout pageType="furnitures">
      <SimpleReactLightbox>
        <Markdown className={classes.markdown}>{data}</Markdown>
        <SRLWrapper>
        <Container fixed maxWidth="md" className={classes.container}>
          <Grid container spacing={3}>
            <GalleryItem {...{imageUrl: '/images/agriturismo/tavolo-1_b.jpg', title: 'Tavolone 4,00 m., tinta naturale'}} />
            <GalleryItem {...{imageUrl: '/images/agriturismo/tavolo-2_b.jpg', title: 'Tavolone 4,40 m., tinta noce'}} />
            <GalleryItem {...{imageUrl: '/images/agriturismo/tavolo-3_b.jpg', title: 'Tavolone 4,00, tinta chiara, doppia panca'}} />
            <GalleryItem {...{imageUrl: '/images/agriturismo/tavolo-4_b.jpg', title: 'Tavolone 3,50 m., non tinto, con panca e sedie'}} />
            <GalleryItem {...{imageUrl: '/images/agriturismo/tavolo-5_b.jpg', title: 'Tavolo 2,20 m., stile moderno, tinta rossa, gambe in acciaio'}} />
            <GalleryItem {...{imageUrl: '/images/agriturismo/tavolo-6_b.jpg', title: 'Tavolo stile artistico, 1,80 m., piano irregolare, tavola unica di noce'}} />
          </Grid>
          </Container>
        </SRLWrapper>
      </SimpleReactLightbox>
    </MainLayout>
  );
}
