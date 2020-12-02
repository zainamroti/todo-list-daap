// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDB from "../../../src/utils/connectDB.js"
import Todo from "../../../src/Model/todo.js"

connectToDB()

export default async (req, res) => {

  if (req.method === 'GET') {
    // Process a Get request
    const todos = await Todo.find({})  //list of all todos
    res.statusCode = 200
    res.send(todos)
    console.log("Got a Get Request...", todos)
  } else if (req.method === 'POST') {
    // Handle any POST HTTP method

  }

  // res.statusCode = 404;
  // res.json({ Error: 'Not Found' })
}

//Todo: Check it out into /api/hello.js

