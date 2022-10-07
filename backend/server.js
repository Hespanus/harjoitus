const express = require('express');
const app = express()
const connectDb = require("./connection")
const Todo = require("./Todo.model.js")
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.options('*', cors());

const PORT = 8080;
require('dotenv').config();

app.listen(PORT, function() {
    console.log(`Listening on ${PORT}`);

    connectDb().then(() => {
        console.log("MongoDb connected");
    });
});





//app.use("/api/")


app.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
});



app.post("/todo-create", async (req, res) => {
    console.log(req.body)
    const todo = new Todo(req.body);

    const todoSaved = await todo.save().then(() => {return todo});

    res.send(todoSaved);
});

app.post("/todo-delete", async (req, res) => {


    Todo.deleteOne({id: req.body.id}, function(err, result) {
        if (err) {
            res.send(err);
        } else {
            res.send(result);
        }
    });


});

app.post("/todo-update", async (req, res) => {


    Todo.updateOne({id:req.body.id}, {complete: req.body.complete},  function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            res.send(docs);
        }
    });


});