import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    linksWindow: {
        width: "300px",
        height: "450px",
        boxShadow: "1px 1px 10px 10px rgba(0,0,0,.25);",
        borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%",
        display: "inlineBlock",
        marginTop: "60px",
        marginBottom: "80px",
        border: "solid black 3px",
        padding: "20px",
        color: "#dedede",
        textDecoration: "none",
        backgroundColor: "#f8f8f8"
    },
    links: {
        fontSize: "60px",
        fontWeight: "300",
        color: "black",
        marginTop: "15px",
    },
    linkedin: {
        fontSize: "40px",
        color: "black",
    },
    resume: {
        fontSize: "35px",
        color: "black",
    },
    github: {
        fontSize: "30px",
        color: "black",
    },
    blog: {
        fontSize: "24px",
        color: "black",
    },
    yolk: {
        width: "100px",
        height: "250px",
        backgroundColor: "#ffcc49",
        borderRadius: "50%",
        marginTop: "65px",
        paddingTop: "10px",
    }

});


function Links() {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="center">
                <Grid className={classes.linksWindow}>
                    <Grid>
                        <Grid container justify="center" xs={12}>
                            <Typography
                                className={classes.links}
                            >
                                Links
                                </Typography>
                            <br></br>
                        </Grid>
                        <Grid container justify="center">
                            <Grid item xs={10} className={classes.yolk}>
                                <Grid container justify="center" xs={12}>
                                    <Typography>
                                        <a href="https://www.warmshape.com/"
                                            target="_blank" rel="noopener noreferrer" className={classes.blog}>
                                            Blog
                                    </a>
                                    </Typography>
                                </Grid>
                                <Grid container justify="center" xs={12}>
                                    <Typography>
                                        <a href="https://www.linkedin.com/in/linus-schief-b1a95489" target="_blank" rel="noopener noreferrer" className={classes.linkedin}>
                                            LinkedIn
                                    </a>
                                    </Typography>
                                </Grid>
                                <Grid container justify="center" xs={12}>
                                    <Typography>
                                        <a href="https://drive.google.com/file/d/1Pg8ONE1OBvO1jhIuW2ivzNMHSlh7B23d/view?usp=sharing"
                                            target="_blank" rel="noopener noreferrer" className={classes.resume}>
                                            Resume
                                    </a>
                                    </Typography>
                                </Grid>

                                <Grid container justify="center" xs={12}>
                                    <Typography>
                                        <a href="https://github.com/Linus41" target="_blank" rel="noopener noreferrer" className={classes.github}>
                                            Github
                                    </a>
                                    </Typography>
                                </Grid>
                                <Grid container justify="center" xs={12}>
                                    <Typography>
                                        <a
                                            className={classes.blog}
                                            href={`mailto:"schief.craft@gmail.com"`}
                                        >
                                            Email
                                        </a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>



        </div >
    )
}

export default Links;

