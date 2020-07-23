import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TemporaryDrawer from "../TempDrawer/TempDrawer";
import Grid from "@material-ui/core/Grid";
import Weaving from "../Images/backgroundweaving.jpg";

const useStyles = makeStyles((theme) => ({
  bar: {
    borderTopRightRadius: "18em 7em",
    borderTopLeftRadius: "18em 7em",
    borderBottomRightRadius: "7em 2em",
    borderBottomLeftRadius: "7em 2em",
    paddingTop: "30px",
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75);",
    height: "125px",
    backgroundImage: `url(${Weaving})`,
    alignItems: "center",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      paddingRight: "20px",
      paddingBottom: "30px",
      height: "95px",
    },
  },
  color: {
    backgroundColor: "black",
  },
  font: {
    fontFamily: "Petit Formal Script, cursive",
    color: "black",
    fontSize: "60px",
    [theme.breakpoints.down("md")]: {
      fontSize: "55px",
      marginLeft: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "28px",
      marginLeft: "5px",
    },
    [theme.breakpoints.down("281px")]: {
      fontSize: "20px",
      marginLeft: "5px",
    },
  },
  smNavbar: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "space-evenly",
    },
  },
}));

function Navigation(props) {

  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.color} position="static" className={classes.bar}>

        <Grid container direction="row" xs={12} alignItems="center" justify="center" className={classes.smNavbar}>
          <Grid container direction="row" alignItems="center" xs={1}>
            <Grid >
              <TemporaryDrawer

              ></TemporaryDrawer>
            </Grid>
          </Grid>
          <Grid container justify="center" item xs={8}>
            <Grid justify="center">
              <Typography
                variant="h2"
                gutterBottom
                className={classes.font}
              >
                Linus Schief
              </Typography>
            </Grid>
          </Grid>
          <Grid item md={1} xs={0}>

          </Grid>
        </Grid>

      </AppBar>

    </>
  );
}

export default Navigation;
