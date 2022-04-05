const mongoose = require('mongoose');
const Todo = require("./Todo.model.js")

const connection = "mongodb://localhost:27017/todotest";

const connectDb = () => {
    return mongoose.connect(connection);
};

module.exports = connectDb;