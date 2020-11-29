import React, {useState} from 'react'
import { Container} from '@material-ui/core'
import TextForm from './components/textform.jsx'
import TodoItems from './components/todoitems'


export default function Home() {
  const [todos, setTodos] = useState(["This is First Todo"])

  function addTodo(item) {
    console.log(`Item received: ${item}`)
    setTodos((prevState) => {
       return [...prevState, item]
    })
  }

  return (<React.Fragment>
       <Container variant="contained" maxWidth="sm">
         <TextForm addTodo={addTodo}/>
         <TodoItems todoList={todos}/>
       </Container>
  </React.Fragment>

  );
}
