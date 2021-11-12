import React, { useEffect, useState } from 'react';
import {useQuery} from '@apollo/client'
import { GET_TODOS } from '../graphQL/Queries'
import TodoCard from './TodoCard';
import './TodoCard.css'

function GetTodos() {

    const {error, loading, data} = useQuery(GET_TODOS);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if(data){
            if(loading){
                console.log('loading');
            }
            setTodos(data.getAllTodos);
            if(error){
                console.log(error);
            }
        }
    }, [data, loading, error]);

    return (
        <div className="card-container">
            {todos.map(todo => (
                <div key={todo.id}>
                    <TodoCard 
                        id={todo.id}
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
