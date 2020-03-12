import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


// =-=-=-=-=-=-=-=-=-=-=-=-=-=
// Instructions for Buttons
// <Button> </Button>
// 
// varient="contained" = Filled Button
// varient="outlined" = Outline Button
// 
// Other classes to use: 
// color=""
// href=""
// size="small", "medium", "Large"
// className="{classes.button}"
//
// =-=-=-=-=-=-=-=-=-=-=-=-=-=

export default function Button1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Button variant="contained" color="primary" href="#contained-buttons">

      </Button>

    </div>
  );
}