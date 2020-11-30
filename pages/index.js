import React, { useState } from 'react'
import { Container, Box } from '@material-ui/core'
import TextForm from './components/textform.jsx'
import TodoItems from './components/todoitems'


export default function Home() {
  const [todos, setTodos] = useState(["This is First Todo"])
  const [newTodo, setNewTodo] = useState({ todo: "", index: -1 })

  function addTodo(item) {
    console.log(`Item received: ${item}`)
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
    console.log(`Printing up sent todo=> ${newTodo.todo}`)
    // console.log(`Printing up sent Normal todo=> ${todo}`)
  }

  return (<React.Fragment>
    <Container variant="contained" maxWidth="sm">
      <TextForm addTodo={addTodo} newTodo={newTodo} />
      <TodoItems todoList={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      <Box sx={{ height: "20rem" }} />
    </Container>
  </React.Fragment>

  );
}
