import {AppBar, Toolbar, Typography, withStyles} from "@material-ui/core"
import React from "react"
import PropTypes from 'prop-types';
import style from '../../styles/Home.module.css';


const styles = {
    root: {
        flexGrow: 1
    },
    appbar: {
     alignItems: 'center',
    }
};

function Header(props) {
    const {classes} = props;
    return <React.Fragment>
        <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
        <Toolbar variant="dense">
          <Typography variant="h5"  >Todo List</Typography>
        </Toolbar>
       </AppBar>
       <h1 className={style.title}>
          Hello Next.js!
        </h1>
    </div>
    </React.Fragment>;
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);