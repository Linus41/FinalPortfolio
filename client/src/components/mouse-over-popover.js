
import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles((theme) => ({
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
        width: "150px",
        borderRadius: "15px",
    },
    header: {
        height: "50px",
        color: "#ebe9e7",
        backgroundColor: "#1b1e21",
        "& .MuiTypography-h5": {
            fontSize: "28px",
        },
    },
}));

 function MouseOverPopover(props) {
    const classes = useStyles(props);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
   

    return (
        <div>
            <CardHeader
                aria-owns={open ? 'mouse-over-popover' : undefined}
                aria-haspopup="true"
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
                title={props.title}
                className={classes.header}
            >
            </CardHeader>
            <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
                description={props.description}
            >
              <Typography>{props.description}</Typography>
            </Popover>
        </div>
    );
}

export default MouseOverPopover;