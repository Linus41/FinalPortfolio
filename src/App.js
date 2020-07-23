import React from 'react';
import './App.css';
import Navigation from "./components/Navbar/navbar";
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import Home from "./pages/Home";
import Grid from '@material-ui/core/Grid';
import Portfolio from "./pages/Portfolio";
import Links from "./pages/Links";
import Contact from "./pages/Contact";
import Weaving from "./components/Images/backgroundweaving.jpg";
import Footer2 from "./components/footer2";

const useStyles = makeStyles((theme) => ({
  outline: {
    borderTopLeftRadius: "18em 7em",
    borderTopRightRadius: "18em 7em",
    borderBottomLeftRadius: "24px",
    borderBottomRightRadius: "24px",
    padding: "20px",
    backgroundColor: "#D7D5DC",
    marginTop: "20px",
    backgroundImage: `url(${Weaving})`,
    boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.50);",
    [theme.breakpoints.down("xs")]: {
      borderTopLeftRadius: "12em 5em",
      borderTopRightRadius: "12em 5em",
      borderBottomLeftRadius: "12em 5em",
      borderBottomRightRadius: "12em 5em",
      marginTop: "10px",
      marginBottom: "0px",
    },
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Router>
      <Container className={classes.outline} justify="center" maxWidth="md">
        <Grid container direction="row" justify="center" xs={12}>
          <Navigation />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <Home />
            </Route>
            <Route exact path="/portfolio" component={Portfolio}>

            </Route>
            <Route exact path="/links" component={Links}>

            </Route>
            <Route exact path="/contact" component={Contact}>

            </Route>
          </Switch>
        </Grid>
      </Container>
      <Grid container>
        <Footer2 />
      </Grid>

    </Router>
  );
}

export default App;
