import React, { useState, } from 'react'
import { Box, List, ListItem, ListItemIcon, Checkbox, ListItemText, IconButton, ListItemSecondaryAction, Typography } from '@material-ui/core'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    text: {
        textDecoration: "line-through",
    },
    textPadding: {
        paddingRight: "80px",
    },
    textMargin: {
        marginRight: "30px"
    }
}));

function TodoItems(props) {
    const classes = useStyles()
    const { todoList, deleteTodo, editTodo, data } = props
    const checkedTodosText = (data.filter(todo => (todo.isChecked))).map(todo => todo.text)
    console.log(checkedTodosText)
    const [checked, setChecked] = useState(checkedTodosText);

    const toggle = (value) => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        var done;

        if (currentIndex === -1) {
            newChecked.push(value);
            done = true;
        } else {
            newChecked.splice(currentIndex, 1);
            done = false;
        }
        setChecked(newChecked);
        return done;
    }

    const handleToggle = (value) => () => {

        const done = toggle(value);

        //Call a PUT (update) Request with fetch API to update checked in DB
        fetch('/api/todos', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: value,   //for finding same item to update
                isChecked: done,
            })
        }).then(response => response.json())
            .then(data => console.log(`update retured ${JSON.stringify(data)}`))
            .catch(error => console.log(`isChecked Update Error ${error}`))

    };



    return (
        <Box sx={{ px: 2, py: 1, position: "relative", height: "70%", display: "block", bgcolor: "pink", }}>
            <List>
                {todoList.map((todo, index) => {
                    if (todo == null) return;
                    {/* console.log(`IsChecked at ${index}: ${((data.length === todoList.length) && data[index].isChecked)}`) */ }
                    {/* ((data.length === todoList.length) && data[index].isChecked */ }
                    const isDone = (checked.indexOf(todo) !== -1)
                    console.log(`IsDONE at ${index}: ${isDone}`)
                    const labelId = `checkbox-list-label-${todo}`;
                    return <ListItem key={todo + index} dense
                        button onClick={handleToggle(todo)}>
                        <ListItemIcon>
                            <Checkbox
                                color="primary"
                                edge="start"
                                checked={isDone}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText disableTypography id={labelId} primary={
                            <Typography className={classes.textMargin}>{todo}</Typography>

                        } className={(isDone) ? classes.text : ""} />
                        <ListItemSecondaryAction >
                            {!(isDone) ?
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
