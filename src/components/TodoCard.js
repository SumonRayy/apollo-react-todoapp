import React from 'react'
import {DELETE_TODO} from '../graphQL/Mutations'
import {useMutation} from '@apollo/client'
import './TodoCard.css'
import { IconContext } from "react-icons";
import {AiFillCloseCircle} from 'react-icons/ai'
import {RiEditCircleFill} from 'react-icons/ri'

function TodoCard(props) {
    const {
        id,
        title,
        detail,
        date
    } = props;
    
    const [deleteTodo, {error}] = useMutation(DELETE_TODO);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(date);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const outputDate = month  + '\n'+ day  + ', ' + year;

function onPressDelete(e) {
    e.preventDefault();
    deleteTodo({
        variables: {
            id: id
        }
    });

    if(error) {
        alert("Error : ",error);
    }else {
        window.location.reload();
    }
}

    return (
            <div className="card">
                <div className="card-header">
                    <h3>{title}</h3>
                    <div className="card-icons">
                        <IconContext.Provider value={{ color: "", size: "1.3em"}}>
                            <div className="card-icon">
                                <RiEditCircleFill onClick={() => alert("Edit Pressed!")}/>
                            </div>
                            <div className="card-icon">
                                <AiFillCloseCircle onClick={
                                    // ()=> console.log(typeof(id))
                                    onPressDelete
                                    }/>
                            </div>
                        </IconContext.Provider>
                    </div>
                </div>
                <div className="card-body">
                    <p>{detail}</p>
                    <span>{outputDate}</span>
                </div>
            </div>
    )
}

export default TodoCard;
