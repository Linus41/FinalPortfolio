import React from "react";
import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TemporaryDrawer from "../TempDrawer/TempDrawer";
import Grid from "@material-ui/core/Grid";
import Weaving from "../Images/backgroundweaving.jpg";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  bar: {
    borderTopRightRadius: "18em 7em",
    borderTopLeftRadius: "18em 7em",
    borderBottomRightRadius: "7em 2em",
    borderBottomLeftRadius: "7em 2em",
    paddingTop: "10px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75);",
    height: "125px",
    backgroundImage: `url(${Weaving})`,
    alignItems: "center",
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "20px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "95px",
      paddingTop: "15px",
    },
  },
  font: {
    fontFamily: "Petit Formal Script, cursive",
    color: "black",
    fontSize: "60px",
    marginTop: "10px",
    [theme.breakpoints.down("md")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "36px",
    },
  },
}));

function Navigation(props) {

  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.bar}>

        <Grid container direction="row" alignItems="center" justify="center">
          <Grid item xs={1}>
            <Grid container justify="center">
              <TemporaryDrawer />
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Grid container justify="center">
              <Typography className={classes.font}>Linus Schief</Typography>
            </Grid>
          </Grid>
          <Grid item xs={1}>
          </Grid>
        </Grid>

      </AppBar>

    </>
  );
}

export default Navigation;
