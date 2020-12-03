import React, { useState } from 'react'
import { Container, Box } from '@material-ui/core'
import TextForm from '../src/components/textform.jsx'
import TodoItems from '../src/components/todoitems'
import connectToDB, { isConnected } from '../src/utils/connectDB.js'
import Todo from '../src/Model/todo.js'

export async function getServerSideProps() {
  //this method runs on server side on every request (refresh)


  if (isConnected == 0) {
    //Connect to database
    console.log("Not Connected, Trying to connect to DB")
    //getting data directly from database.
    await connectToDB();
  }

  //Read All Todos from database.
  const todos = await Todo.find({})  //list of all todos
  //Have to stringigy and Parse Todo items List from DB as it may contain undefined elements  
  const parsedData = JSON.parse(JSON.stringify(todos))
  // console.log("Got the data from DB...", parsedData)

  return {
    props: {
      data: parsedData,
    },
  };
}

export default function Home(props) {

  const { data } = props
  const todoList = data.map(todo => todo.text)
  const [todos, setTodos] = useState(todoList)
  const [newTodo, setNewTodo] = useState({ todo: "", index: -1 })


  if ((data === null)) return <div>{`Could not Read data from DB`}</div>
  if (!data) return <div>Loading...</div>

  function addTodo(item) {
    //making a post request with the fetch API
    fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: item,
        isChecked: false,
      })
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))


    setTodos((prevState) => {
      return [...prevState, item]
    })
  }

  const update = (oldTodo, newTodo, editIndex) => {
    //Update todo on DB using PUT method.
    fetch('/api/todos', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        oldText: oldTodo,
        text: newTodo,
        isChecked: false,
      })
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))

    todos.splice(editIndex, 0, newTodo);
    setTodos([...todos]);

  }

  const deleteTodo = (delIndex) => {
    //Delete item on DB with DELETE request
    fetch('/api/todos', {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text: todos[delIndex],
      })
    }).then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
    //Delete on Frontend
    const newList = todos.filter((val, index) => index !== delIndex)
    setTodos(newList)
  }

  const editTodo = (todo, editIndex) => {
    setNewTodo({ "todo": todo, "index": editIndex, "oldTodo": todos[editIndex] })
    setTodos(todos.filter((todo, index) => index !== editIndex))
  }

  return (<React.Fragment>
    <Container variant="contained" maxWidth="lg">
      <Box sx={{ mt: 1.5, border: 2.5, borderColor: "#e05297" }} >
        <TextForm addTodo={addTodo} newTodo={newTodo} update={update} />
        <TodoItems todoList={todos} deleteTodo={deleteTodo} editTodo={editTodo} data={data} />
      </Box>
      <Box sx={{ height: "20rem" }} />
    </Container>
  </React.Fragment>
  );
}
