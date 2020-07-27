import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Project from "../components/Project/project";
import Shuffle from "../components/Images/thenewshuffle2.png";
import Hexbot from "../components/Images/hexbot.png";
import Bestimator from "../components/Images/bestimatorplayerpage.png";
import ColorStory from "../components/Images/ColorStoryPic.png";
import Burger from "../components/Images/burgerapp (2).png";
import Friends from "../components/Images/FriendDirectory.png";
import Turkey from "../components/Images/Turkey.jpg";
import Robe from "../components/Images/GraduationRobeInSnowSquare.jpg";
import Album from "../components/Images/AngeloSpencerAlbumCoverSquare.jpg";
import AnalogProject from "../components/Project/analog-project";

const useStyles = makeStyles((theme) => ({
   
    container: {
        marginTop: "20px",
        marginBottom: "20px",
    },
}));


function Portfolio(props) {
    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.container} container spacing={4} direction="row" alignItems="flex-start">
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Project 
                    title="Shuffle" 
                    link="https://linus41.github.io/Shuffle/" 
                    name={Shuffle}
                    github="https://github.com/Linus41/Shuffle"
                    description="'Shuffle' is a visual horoscope generator based on your astrological sign. Try it!"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Project
                    title="Color Generator" 
                    name={Hexbot}
                    link="https://linus41.github.io/Color-Generator/"
                    github="https://github.com/Linus41/Color-Generator"
                    description="Random color generator that displays hex codes for each color" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Project 
                    title="Burger" 
                    name={Burger}
                    link="https://infinite-spire-90667.herokuapp.com/"
                    github="https://github.com/Linus41/Burger"
                    description="Make a list of all your fantasy burgers to the left, then 'eat' them and watch them show up in the 'Devoured' list on the right!"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Project 
                    title="Bestimator" 
                    name={Bestimator}
                    link="https://the-bestimator.herokuapp.com/"
                    github="https://github.com/Linus41/Bestimator"
                    description="Think you're good at guessing quantities and weights by looking at a picture? Prove it! Try The Bestimator today!" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Project 
                    title="Color Story" 
                    name={ColorStory}
                    link="https://color-story.herokuapp.com/"
                    github="https://github.com/Mleuer/Color-Story"
                    description="Color Story is like a social media app for your art. Check out the Color Wall to find new things to love and support artists directly!" />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <Project 
                    title="Friend Generator" 
                    name={Friends}
                    link="https://linus41.github.io/React-Friend-Directory/index.html"
                    github="https://github.com/Linus41/React-Friend-Directory"
                    description="Never forget who your friends are with the Friend Directory! Filter by name or talents" />
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <AnalogProject 
                    title="Album Cover" 
                    name={Album}
                    link="https://www.youtube.com/watch?v=MrAw_3H5kic"
                    description="Original artwork and layout for Angelo Spencer's Album 'Love in the Morning'"
                    website="'Solid Home Life' Music Video"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <AnalogProject 
                    title="Hand-woven Robe" 
                    name={Robe}
                    link="http://warmshape.com/"
                    description="I'm a weaver! Check out more on my blog, linked below"
                    website="Warm Shape Blog"
                     />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={4}>
                    <AnalogProject 
                    title="Embroidered Turkey" 
                    name={Turkey}
                    link="https://linusbrandclothing.bigcartel.com/"
                    description="I dedicated three years to my art business, 'Linus Textiles,' which is no longer active, but I keep my website as a record of the things I made"
                    website="Linus Textiles"
                     />
                </Grid>


            </Grid>

        </div>
    )
}

export default Portfolio;