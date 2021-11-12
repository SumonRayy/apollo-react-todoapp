import React, {useRef, useState} from 'react'
import {ADD_TODO} from '../graphQL/Mutations'
import {useMutation} from '@apollo/client'
import './Form.css'
import { RiAddFill } from "react-icons/ri";

function TodoForm() {

    const [title, setTitle] = useState('')
    const [detail, setDetail] = useState('')

    const [addTodo, {error}] = useMutation(ADD_TODO);


    const inputValue1 = useRef(null);
    const inputValue2 = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title === '') {
            alert('Please fill in all fields')
        } else {
            inputValue1.current.value = ''
            inputValue2.current.value = ''

            addTodo({
                variables: {
                    title,
                    detail,
                    date: new Date()
                }
            })

            if(error) {
                alert(error.message)
            }
            setDetail('')
            setTitle('')
        }   

        window.location.reload();
    }

    return (
        <div className="form-container">
            <form>
                <input 
                ref={inputValue1}
                type="text" 
                placeholder="Add Todo Title" 
                onChange={(e) => setTitle(e.target.value)}
                required={true}
                />
                <input 
                ref={inputValue2}
                type="text" 
                placeholder="Add Todo Detail" 
                id="detail"
                onChange={(e) => setDetail(e.target.value)}
                />
                <button 
                type="submit"
                onClick={handleSubmit}
                disabled={title === '' || detail === ''}
                >
                    <RiAddFill color="ffdfb9" size="1em"/>
                    Add
                </button>            
            </form>
        </div>
    )
}

export default TodoForm
