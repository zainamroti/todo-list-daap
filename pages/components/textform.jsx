import React, {useState} from 'react'
import {TextField, Button, withStyles, Box} from "@material-ui/core"
import PropTypes from "prop-types"
// import { compose, spacing, palette } from '@material-ui/system';
// const Box = styled('div')(compose(spacing, palette));

// const styles = {
//   // root: {
//   //   display: '100%',
//   //   flex: 1,
//   //   // height: '10rem',
//   // },
//    button: { 
//     position: 'absolute', 
//     left: '50%', 
//     top: '50%',}
// }

function TextForm(props) {
  const {addTodo} = props;
  const [todoText, setTodoText] = useState("")

  function submitItem(e) {
    console.log(`Item == ${todoText}` )
    addTodo(todoText);

    e.preventDefault();
    setTodoText("")
  }


    return <React.Fragment>
      <form noValidate autoComplete="off" onSubmit={submitItem}>
         <Box sx={{px:2, pt:3, pb:1,mt:1, display:"flex", flexWrap:"nowrap", justifyContent:"center", bgcolor:"pink"}}>
            <Box sx={{ 
              width:"75%"
              }}>
            <TextField
            onChange={(e) => {
              const {value} = e.target;
              setTodoText(value)
              }}
            value={todoText}
            fullWidth={true}
            id="filled-tf"
            label="Enter Todo Item"
            variant="filled"
            name="TodoField"
            color="secondary"/>
         </Box>
          <Box sx={{
            my:1, ml:2, width:"36%",
            }}>
              <Button size="large"
                variant="contained" 
                fullWidth={true}
                type="submit">
                Add Item
              </Button>
          </Box>
        </Box>

    </form>
    </React.Fragment>;
}

// TextForm.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(TextForm);
export default (TextForm);