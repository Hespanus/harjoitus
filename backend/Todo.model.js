const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    complete: {
        type: Boolean
    },
    subof: {
        type: String
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;