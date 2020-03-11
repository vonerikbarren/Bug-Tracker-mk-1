import React from 'react'
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Drawer from "./Drawer";
import { Divider, createMuiTheme } from '@material-ui/core';






const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },


}));

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Drawer />


      </Grid>

    </div>
  );
}