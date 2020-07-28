import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import Brightness1Icon from '@material-ui/icons/Brightness1';
import LinkIcon from '@material-ui/icons/Link';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 300,
    },
    fullList: {
        width: "auto",
    },
    drawer: {
        "& .MuiPaper-root": {
          backgroundColor: "#222222",
          color: "#ffffff",
        },
    },
    iconColor: {
        color: "#00FFFF"
    },
    portfolioColor: {
        color: "#FF4500",
    },
    linksColor: {
        color: "#FFCCCC",
    },
    font: {
        fontFamily: "Petit Formal Script, cursive",
        color: "black",
        fontSize: "60px",
        [theme.breakpoints.down("md")]: {
          fontSize: "60px",
        },
        [theme.breakpoints.down("sm")]: {
          fontSize: "50px",
        },
        [theme.breakpoints.down("xs")]: {
          fontSize: "36px",
        },
    },
    hover: {
        "& .MuiButtonBase-root": {
            backgroundColor: "red",
        },
    },
}));

export default function TemporaryDrawer(props) {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            
                <List component="nav" aria-label="main mailbox folders">
                   
                        <ListItem button component={Link} to="/">
                            <ListItemIcon className={classes.iconColor}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home" />
                        </ListItem>
                        <ListItem button component={Link} to="/portfolio">
                            <ListItemIcon className={classes.portfolioColor}>
                                <Brightness1Icon />
                            </ListItemIcon>
                            <ListItemText primary="Portfolio" />
                        </ListItem>
                        <ListItem button component={Link} to="/links">
                            <ListItemIcon className={classes.linksColor}>
                                <LinkIcon />
                            </ListItemIcon>
                            <ListItemText primary="Links" />
                        </ListItem>
                        
                </List>
            
        </div>
    );

    return (
        <div>
        {["top"].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton className={classes.hover} onClick={toggleDrawer(anchor, true)}>
                <Typography className={classes.font}>Linus Schief</Typography>
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              className={classes.drawer}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
}
