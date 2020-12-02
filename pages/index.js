import React, { useState } from 'react'
import { Container, Box } from '@material-ui/core'
import TextForm from '../src/components/textform.jsx'
import TodoItems from '../src/components/todoitems'
// import { useRouter } from 'next/router'
import useSWR from 'swr'
// import apiRoute from "api/todos/"


// const fetcher = async (url) => {
//   //making a Get request with the fetch API
//   const res = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//   })

//   const data = await res.json()
//   console.log(`Got Data fetched...: ${data}`)

//   if (res.status !== 200) {
//     throw new Error(`${res.status}, Could not fetch data at: ${url}`)
//   }
//   // console.log(`Got data fetched...: ${data}`)
//   return data
// }

export async function getServerSideProps() {
  //making a Get request with the fetch API
  const res = await fetch(`http://localhost:3000/api/todos/`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
  // const res = await apiRoute();
  console.log(`Got RESPONSE fetched...: ${res.toString()}`)

  const data = await res.json();
  console.log(`Got Data fetched...: ${data}`)

  // console.log(`Got data fetched...: ${data}`)
  // return data
  return {
    props: {
      [data]: data,
      status: res.status,
    },
  };
}

export default function Home(props) {
  // const { query } = useRouter()
  // const { data, error } = useSWR(
  //   () => `api/todos`,
  //   fetcher
  // )
  const { data, status } = props
  const [todos, setTodos] = useState([data])
  const [newTodo, setNewTodo] = useState({ todo: "", index: -1 })


  if ((status !== 200)) return <div>{`${status}, Could not fetch data`}</div>
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

  function readTodos() {
    console.log(data)
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

  const deleteTodo = (delIndex) => {
    const newList = todos.filter((val, index) => index !== delIndex)
    setTodos(newList)
  }

  const editTodo = (todo, editIndex) => {
    setNewTodo({ "todo": todo, "index": editIndex })
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
