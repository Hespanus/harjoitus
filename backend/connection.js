import mongoose from "mongoose";
import Todo from "./Todo.model.js"

const connection = "mongodb://localhost:27017/todotest";

const connectDb = () => {
    return mongoose.connect(connection);
};

export default connectDb;