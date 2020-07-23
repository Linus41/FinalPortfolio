import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  bar: {
    width: "100%",
    height: "60px",
    backgroundColor: "#1b1e21",
    color: "wheat",
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "20px",
  },

}));

function Footer2() {

  const classes = useStyles();

  return (
    <>
      <Grid className={classes.bar} container xs={12} alignItems="center" justify="center" direction="row">
        <Grid item>
          <Typography>
          Copyright © Linus Schief 2020
          </Typography>
        </Grid>

      </Grid>
    </>
  );
}

export default Footer2;
