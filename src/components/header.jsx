import { AppBar, Toolbar, Typography } from "@material-ui/core"
import React from "react"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: theme.title,
    appbar: theme.appbar,
}));

function Header() {
    const classes = useStyles();


    return <React.Fragment>
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar variant="dense">
                    <Typography variant="h4"  >Todo List</Typography>
                </Toolbar>
            </AppBar>
            <h1 className={classes.title} >
                Hello Next.js!
            </h1>
        </div>
    </React.Fragment>;
}


export default Header;