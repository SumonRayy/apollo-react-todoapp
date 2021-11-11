import React, { useEffect, useState } from 'react';
import {useQuery, gql} from '@apollo/client'
import { GET_TODOS } from '../graphQL/Queries'
import TodoCard from './TodoCard';
import './TodoCard.css'

function GetTodos() {

    const {error, loading, data} = useQuery(GET_TODOS);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if(data){
            setTodos(data.getAllTodos);
        }
    }, [data]);

    return (
        <div className="card-container">
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoCard 
                        title={todo.title}
                        detail={todo.detail}
                        date={todo.date}
                    />                
                </div>
            ))}
        </div>
    )
}

export default GetTodos;
