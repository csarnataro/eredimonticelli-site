import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import MainLayout from './MainLayout'
import Markdown from './Markdown'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  markdown: {
    padding: theme.spacing(2)
  }
}))

export default function SimpleMarkdownPage (props) {
  const classes = useStyles()
  const { data, pageType } = props
  return (
    <MainLayout pageType={pageType}>
      <Markdown className={classes.markdown}>
        {data}
      </Markdown>
    </MainLayout>
  )
}

SimpleMarkdownPage.propTypes = {
  data: PropTypes.object,
  pageType: PropTypes.string
}

SimpleMarkdownPage.defaultProps = {
  data: 'NO DATA'
}
