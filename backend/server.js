import express from "express"
import connectDb from "./connection.js"
import Todo from "./Todo.model.js";
import * as cors from "cors";
import mongoose from "mongoose";

const app = express()


const allowedOrigins = ['http://localhost:3000'];

const options: cors.CorsOptions = {
    origin: allowedOrigins
};


app.use(cors(options))
app.use(express.json())

//app.use("/api/")
const PORT = 8080;

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