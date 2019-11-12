import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import MainLayout from "./MainLayout";
import Markdown from "./Markdown";

const useStyles = makeStyles(theme => ({
  markdown: {
    padding: theme.spacing(2)
  },
}));

export default function SimpleMarkdownPage(data) {
  const classes = useStyles();

  return (
    <MainLayout>
      <Markdown className={classes.markdown}>
        {data || 'NO DATA'}
      </Markdown>
    </MainLayout>
  );
}
