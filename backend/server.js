const express = require('express');
const app = express()
const connectDb = require("./connection")
const Todo = require("./Todo.model.js")
const cors = require('cors')


const PORT = 8080;

app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});



app.use(cors())
app.use(express.json())

//app.use("/api/")


app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});



app.post("/todo-create", async (req, res) => {
    console.log(req.body)
    const todo = new Todo(req.body);

    await todo.save().then(() => console.log("Todo created"));

    res.send("Todo created \n");
});

app.get("/todo-delete", async (req, res) => {
    const body = req.body
    Todo.deleteOne(body.id)
    const todos = await Todo.find();
    res.json(todos);
});