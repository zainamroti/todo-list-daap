import React, { useState, } from 'react'
import { Box, List, ListItem, ListItemIcon, Checkbox, ListItemText, IconButton, ListItemSecondaryAction } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        textDecoration: "line-through",
    },
}));

function TodoItems(props) {
    const classes = useStyles()
    const { todoList, deleteTodo, editTodo } = props
    const [checked, setChecked] = useState([0]);


    const handleToggle = (value, labelId) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };



    return (
        <Box sx={{ px: 2, py: 1, position: "relative", height: "70%", display: "block", bgcolor: "pink", }}>
            <List>
                {todoList.map((todo, index) => {
                    const labelId = `checkbox-list-label-${todo}`;
                    return <ListItem key={todo + index} dense
                        button onClick={handleToggle(todo, labelId)}>
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                edge="start"
                                checked={checked.indexOf(todo) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={todo} className={(checked.indexOf(todo) !== -1) ? classes.root : ""} />
                        <ListItemSecondaryAction>
                            {!((checked.indexOf(todo) !== -1)) ?
                                <IconButton color="primary" edge="end" aria-label="edit" onClick={() => editTodo(todo, index)}>
                                    <EditIcon />
                                </IconButton> : ""
                            }
                            <IconButton color="primary" edge="end" aria-label="delete" onClick={() => deleteTodo(index)}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                })}
            </List>
        </Box>
    )
}

export default TodoItems
