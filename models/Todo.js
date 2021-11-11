import mongoose  from "mongoose";

const Schema = mongoose.Schema; // schema initialization
const todoSchema = new Schema({ // schema definition
    title: {
        type: String,
        required: true
    },
    detail: String,
    date: Date,
}, {timestamps: true});

const Todo = mongoose.model("todo", todoSchema); // model initialization

export default Todo;    // export model
