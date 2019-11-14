import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import MainLayout from "./MainLayout";
import Markdown from "./Markdown";

const useStyles = makeStyles(theme => ({
  markdown: {
    padding: theme.spacing(2)
  },
}));

export default (props) => {
  const classes = useStyles();
  const { data, pageType } = props
  return (
    <MainLayout pageType={pageType}>
      <Markdown className={classes.markdown}>
        {data || 'NO DATA'}
      </Markdown>
    </MainLayout>
  );
}
