import React from 'react'
import {TextField, Button, withStyles, Box} from "@material-ui/core"
import PropTypes from "prop-types"
// import { compose, spacing, palette } from '@material-ui/system';
// const Box = styled('div')(compose(spacing, palette));

const styles = {
  root: {
    display: '100%',
    flex: 1,
    height: '50rem',
  },
   button: { 
    position: 'absolute', 
    left: '50%', 
    top: '50%',}
}

function TextForm(props) {
  const {classes} = props;

  function submitItem(e) {
    console.log("Item Submited...")
    e.preventDefault();
  }

    return <React.Fragment>
    <div className={classes.root}>
      <form noValidate autoComplete="off" onSubmit={submitItem}>
         <Box sx={{ flex:2, flexDirection:"row", my:1}}>
          <Box sx={{ py:5, pl:5, pr:17, position:"absolute", width:"520px",
           bgcolor:"pink", display:"inline"}}>
          <TextField
          fullWidth={true}
          id="filled-tf"
          label="Enter Todo Item"
          variant="filled"
          color="secondary"
        />
          </Box>
          <Box sx={{ my:3, position:"relative", left:"395px", top:"45px",
            bgcolor:"pink", display:"inline"}}>
            <Button size="large"
              variant="contained" 
              type="submit"
              >
              Add Item
            </Button>
          </Box>
        </Box>

    </form>
    </div>
    </React.Fragment>;
}

TextForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextForm);