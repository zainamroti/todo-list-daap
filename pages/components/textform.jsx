import React from 'react'
import {TextField, Button, withStyles, Box} from "@material-ui/core"
import PropTypes from "prop-types"
// import { compose, spacing, palette } from '@material-ui/system';
// const Box = styled('div')(compose(spacing, palette));

const styles = {
  root: {
    display: '100%',
    flex: 1,
    // height: '10rem',
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
         <Box sx={{py:3,my:1, display:"flex", justifyContent:"center",  bgcolor:"pink"}}>
            <Box sx={{ 
              // position:"relative", display:"inline"
              width:"22rem"
              }}>
            <TextField
            fullWidth={true}
            id="filled-tf"
            label="Enter Todo Item"
            variant="filled"
            color="secondary"/>
         </Box>
          <Box sx={{
            mt:1, ml:2
            // color:"red", position:"relative", display:"inline"
            }}>
              <Button size="large"
                variant="contained" 
                type="submit">
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