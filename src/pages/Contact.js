import React from "react";
import { Container, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    bar: {
      borderRadius: "24px",
      paddingTop: "15px",
      border: "black solid 4px",
    },
  });


function Contact() {
    const classes = useStyles();
    return (
        <div>
            <Paper>
                Contact
            </Paper>

        </div>
    )
}

export default Contact;