import React from "react";

import {Box} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  jumbotron: {
    height: 500,
    clear: 'both',
    paddingTop: '120',
    textAlign: 'center'
  }
}))

function Jumbotron({ children }) {
  const classes = useStyles();
  return (
    <Box component='div'
      className={classes.jumbotron}
    >
      {children}
    </Box>
  );
}

export default Jumbotron;
