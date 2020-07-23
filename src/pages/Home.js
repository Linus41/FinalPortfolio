import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from "@material-ui/core";
import Linus from "../components/Images/LinusFlowersBarFrancis.jpg";

const useStyles = makeStyles({
    bar: {
        borderRadius: "24px",
        paddingTop: "15px",
        border: "black solid 4px",
    },
    font: {
        fontSize: "16px",
    },
    paper: {
        padding: "20px",
        borderRadius: "16px",
        marginTop: "47px",
        marginBottom: "20px",
        backgroundColor: "#ebe9e7",
    },
    image: {
        width: "100%",
        borderRadius: "16px",
        marginTop: "80px",
        boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.50);",
    }
});


function Home() {
    const classes = useStyles();
    return (
        <div>
            <Grid container direction="row" justify="center" spacing={3}>
                <Grid item xs={12} md={4} sm={8} lg={4}>
                    <img className={classes.image} src={Linus} />
                </Grid>
                <Grid item xs={12} md={8} sm={12} lg={8}>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography paragraph="true" variant="body2" className={classes.font}>
                            My name is Linus Schief, and I'm a lifelong maker, artist, designer, and weirdo! My creative and professional background is varied. From playing drums in a world-touring band to starting my own textile design company in a yurt, I have always been inventive and resourceful with whatever tools I have available. That used to look like physical tools and materials like woodworking chisels, a sewing machine, a screen and some ink, a weaving loom...but these days it is shifting into the digital realm with skills like computer programming, digital illustration, and web design.
<br></br><br></br>
One of my best qualities, both creatively and professionally, is that I understand how to weave a variety of things together to create something fresh yet relatable. When I have an idea I see it through, rolling with the obstacles and seeing them as learning opportunities. 
<br></br><br></br>
Computer Programming is fairly new to me; I was exposed to coding in a full-time college program that combined it with loom weaving. At the time, I found coding to be incomprehensible and intimidating (not to mention male-dominated). However, a few years after graduating I found myself more and more drawn to it so I attended a full-stack bootcamp where I gained many useful skills and the confidence to pursue other digital-related things such as graphic design and digital illustration.
<br></br><br></br>
I've always loved design and invention, and bringing function and aesthetic together for a rich and exciting experience. My goal is to bring more material and textural elements to web design. I look forward to whatever comes next!
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>

        </div>
    )
}

export default Home;