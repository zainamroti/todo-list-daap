// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import connectToDB from "../../../src/utils/connectDB.js"
import Todo from "../../../src/Model/todo.js"

connectToDB()

export default async function apiRoute(req, res) {

  // CRUD with REST API Routes of Nextjs
  switch (req.method) {
    case 'POST':
      // Handle any POST HTTP method
      const todo = req.body
      console.log("Got a Post Request...", todo)
      Todo.create(todo, (err) => console.error(err))
      res.status(200).json({ PostSuccess: "true" })
      break;
    case 'GET':
      // Process a Get request
      const todos = await Todo.find({})  //list of all todos
      res.status(200).json(todos)
      break;
    case 'PUT':
      const data = req.body;
      // let updateErr = false;
      const updatedTodo = await Todo.updateOne({ text: data.text, }, { isChecked: data.isChecked }, (err) => err && (console.log(err)))
      console.log(`Got a Put Req, Updated Todo: ${data.text, data.isChecked}`)
      // updateErr ? res.json({ UpdateError: "true" }) : res.json({ UpdateSuccess: "true" })
      res.json({ UpdateSuccess: "true", [updatedTodo]: updatedTodo })
      break;
    case 'DELETE':
      break;
  }
}

