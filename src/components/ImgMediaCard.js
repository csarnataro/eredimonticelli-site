/* eslint-disable react/prop-types */
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345
  },
  cardImg: {
    height: '200px',
    [theme.breakpoints.down('xs')]: {
      height: '240px'
    }
  }
}))

export default function ImgMediaCard ({ image, title }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea data-attribute="SRL">
        <CardMedia
          component="img"
          alt={title}
          className={classes.cardImg}
          image={image}
          title={title}
        />
        <CardContent onClick={() => alert(1)}>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
