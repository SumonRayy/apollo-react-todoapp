import Todo from "../models/Todo.js"; 

const resolvers = {
    Query: {
        hello: () => 'Hello world! from Rayy',
        getAllTodos: async () => {     
            return await Todo.find(); // return all todos
        },
        getTodo: async (root, args) => {
            return await Todo.findById(args.id); // return todo by id
        }
    },
    Mutation: {
        addTodo: async (root, args) => {
            const newTodo = new Todo({
                title: args.title,
                detail: args.detail,
                date: args.date,
            });
            await newTodo.save();
            return newTodo;
        },
        updateTodo: async (root, args) => {
            const { id, title, detail, date } = args;
            const updatedTodo = {};
            if (title) updatedTodo.title = title;
            if (detail) updatedTodo.detail = detail;
            if (date) updatedTodo.date = date;
            const todo = await Todo.findByIdAndUpdate(id, { $set: updatedTodo }, { new: true });
            return todo;
        },
        deleteTodo: async (root, args) => {
            const todo = await Todo.findByIdAndDelete(args.id);
            return todo.title+" - deleted";
        },
    }
};  // define resolvers

export default resolvers; // export resolvers