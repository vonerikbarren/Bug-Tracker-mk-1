import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button1 from '../../primary/Buttons/Button1';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import LandingPageTab from '../../primary/Tabs/LandingPageTab';


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

export default function CenteredGrid() {
  const classes = useStyles();
  const RegisterText = "Register";

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <br />
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>Welcome to Stark Industries Project Deficiency Tracker</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Container className={classes.paper}>

          </Container>
        </Grid>


        <Grid item xs={12}>
          <Container className={classes.paper}>
            <LandingPageTab />
          </Container>
        </Grid>




        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography>Copyright @2020</Typography>
            <Typography>Vsparks Industry</Typography>
          </Paper>
        </Grid>


      </Grid>
    </div >
  );
}
