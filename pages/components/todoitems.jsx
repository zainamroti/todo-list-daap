import React, {useState, } from 'react'
import {Box} from '@material-ui/core'

function TodoItems(props) {
    const {todoList} = props

    return (
        <Box sx={{px:2, py:1, position:"relative", height:"50%", display:"block", bgcolor:"yellow",}}>
            {todoList.map((todo,index) => {
             console.log(todo);
            return <p key={todo+index}>{todo}</p>;
            })}
        </Box>
    )
}

export default TodoItems
