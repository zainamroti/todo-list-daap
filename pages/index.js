import React, { useState } from 'react'
import { Container, Box } from '@material-ui/core'
import TextForm from './components/textform.jsx'
import TodoItems from './components/todoitems'


export default function Home() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState({ todo: "", index: -1 })

  function addTodo(item) {
    setTodos((prevState) => {
      return [...prevState, item]
    })
  }

  const deleteTodo = (delIndex) => {
    const newList = todos.filter((val, index) => index !== delIndex)
    setTodos(newList)
  }

  const editTodo = (todo, editIndex) => {
    setNewTodo({ "todo": todo, "index": editIndex })
  }

  const update = (newTodo, editIndex) => {
    console.log(newTodo, editIndex)
    const newList = todos.map((val, index) => {
      if (index === editIndex) {
        return newTodo;
      }
      return val;
    })
    setTodos(newList)
  }

  return (<React.Fragment>
    <Container variant="contained" maxWidth="sm">
      <Box sx={{ mt: 1.5, border: 2, borderColor: "#fc8621" }} >
        <TextForm addTodo={addTodo} newTodo={newTodo} update={update} />
        <TodoItems todoList={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </Box>
      <Box sx={{ height: "20rem" }} />
    </Container>
  </React.Fragment>

  );
}
