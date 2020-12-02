import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core"
import React from "react"
import PropTypes from 'prop-types';
import style from '../../styles/Home.module.css';
import { makeStyles } from '@material-ui/core/styles';


// const styles = {
//     root: {
//         flexGrow: 1
//     },
//     appbar: {
//         alignItems: 'center',
//     }
// };

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // color: theme.palette.secondary.main,
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

// Header.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default Header;