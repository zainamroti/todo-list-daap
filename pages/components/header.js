import {AppBar, Toolbar, Typography, withStyles} from "@material-ui/core"
import React from "react"
import PropTypes from 'prop-types';
import style from '../../styles/Home.module.css';


const styles = {
    root: {
        flexGrow: 2
    },
 appbar: {
     alignItems: 'center',
 }
};

function Header(props) {
    const {classes} = props;
    return <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          <Typography variant="h5"  >Todo List</Typography>
        </Toolbar>
       </AppBar>
       <h1 className={style.title}>
          Hello Next.js!
        </h1>
    </div>;
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);