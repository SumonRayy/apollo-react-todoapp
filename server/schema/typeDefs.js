import { gql } from 'apollo-server-express';

const typeDefs = gql`
    scalar Date
    type Todo {
        id: ID
        title: String
        detail: String
        date: Date
    }
    type Query {
        hello: String
        getAllTodos: [Todo]
        getTodo(id:ID): Todo
    }
    type Mutation {
        addTodo(title: String, detail: String, date: Date): Todo
        updateTodo(id: ID, title: String, detail: String, date: Date): Todo
        deleteTodo(id: String): Todo
    }
`;  // define schema

export default typeDefs; // export schema