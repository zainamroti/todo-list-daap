// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDB from "../../../src/utils/connectDB.js"
import Todo from "../../../src/Model/todo.js"

connectToDB()

export default async function apiRoute(req, res) {

  if (req.method === 'GET') {
    // Process a Get request
    const todos = await Todo.find({})  //list of all todos
    console.log("Got a Get Request...", todos)
    // res.statusCode = 200
    res.status(200).json({ this: "this", answer: "true" })
    // res.status(200).json({ Todos: todos })
  } else if (req.method === 'POST') {
    // Handle any POST HTTP method
    const todo = req.body
    console.log("Got a Post Request...", todo)
    Todo.create(todo, (err) => console.error(err))
    res.status(200).json({ Success: "true" })
  }
}

