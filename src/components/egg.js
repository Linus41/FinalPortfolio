import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    linksWindow: {
        width: "25px",
        height: "37px",
        boxShadow: "1px 1px 5px 5px rgba(0,0,0,.25);",
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        display: "inlineBlock",
        color: "#dedede",
        textDecoration: "none",
        backgroundColor: "#f8f8f8",
        marginTop: "20px",
    },

    yolk: {
        width: "15px",
        height: "15px",
        backgroundColor: "#ffcc49",
        borderRadius: "50%",
        marginTop: "15px",
    },
}));

function Yolk() {
    const classes = useStyles();
    return (
        <>
            <Grid className={classes.linksWindow}>
                <Grid container justify="center">
                    <Grid item className={classes.yolk}>
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default Yolk;