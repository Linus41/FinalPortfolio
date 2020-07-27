import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from '@material-ui/core/Link';
import MouseOverPopover from "../mouse-over-popover";

function AnalogProject(props) {
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            overflow: "auto",
            "& .MuiPaper-rounded": {
                borderRadius: "24px",
            },
        },
        image: {
            width: "97%",
            borderRadius: "24px",
            marginBottom: "10px",
        },
        header: {
            backgroundColor: "#1b1e21",
            height: "50px",
            color: "#ebe9e7",
        },
        card: {
            borderRadius: "24px",
            justify: "center",
            height: "auto",
            backgroundColor: "#ebe9e7",
            boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.50);",
        },
        font: {
            color: "black",
            fontWeight: "500",
            textDecoration: "underline",
        }

    }));

    const classes = useStyles(props);

    return (
        <>

            <Card className={classes.card} style={{ textAlign: 'center' }}>
                <MouseOverPopover
                    title={props.title}
                    description={props.description}>
                </MouseOverPopover>
                <CardContent>
                    <img src={props.name} alt="project" className={classes.image} />
                    <Grid container justify="center" xs={12}>
                        <Grid justify="center">
                            <Link
                                href={props.link}
                                target="_blank"
                                rel="noopener"
                                className={classes.font}
                            >
                                {props.website}
                            </Link>
                        </Grid>
                    </Grid>



                </CardContent>


            </Card>


        </>



    );
}

export default AnalogProject;