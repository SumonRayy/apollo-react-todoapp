import React from 'react'
import './TodoCard.css'

function TodoCard(props) {
    const {
        title,
        detail,
        date
    } = props;

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(date);
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const outputDate = month  + '\n'+ day  + ', ' + year;

    return (
            <div className="card">
                <div className="card-header">
                    <h3>{title}</h3>
                    </div>
                <div className="card-body">
                    <p>{detail}</p>
                    <span>{outputDate}</span>
                </div>
            </div>
    )
}

export default TodoCard;
