import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from '@material-ui/core/Link';
import MouseOverPopover from "../MouseOverPopover";
import Modal from '@material-ui/core/Modal';
import Typography from "@material-ui/core/Typography";


function Project(props) {
    const useStyles = makeStyles((theme) => ({
        image: {
            width: "100%",
            borderRadius: "28px",
            marginBottom: "10px",
        },
        header: {
            height: "60px",
            backgroundColor: "#1b1e21",
        },
        card: {
            borderRadius: "24px",
            backgroundColor: "#ebe9e7",
            boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.50);",
            width: "100%",
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
                    <img src={props.name} className={classes.image} />
                    <Grid container justify="center" xs={12}>
                        <Grid>
                            <Link
                                href={props.link}
                                target="_blank"
                                rel="noopener"
                                className={classes.font}
                            >
                                Deployed Version
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" xs={12}>
                        <Grid justify="center">
                            <Link
                                href={props.github}
                                target="_blank"
                                rel="noopener"
                                className={classes.font}
                            >
                                Github Repo
                            </Link>
                        </Grid>
                    </Grid>


                </CardContent>


            </Card>


        </>



    );
}

export default Project;