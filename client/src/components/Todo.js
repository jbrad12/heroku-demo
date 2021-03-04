import "../App.css"
import React from "react"

export default function Todo({ todo, type, toggleStatus, handleDelete }) {
    console.log(todo._id)
    const todos = todo.map(todo => {
        const icon = todo.completed ? <i onClick={() => handleDelete(todo._id)} className="fas fa-trash"></i> : null
        return (
            <div className="todo">
            <h3 className="todoItem" key={todo._id} >{todo.title}</h3>
            <label className="switch">
                <input onClick={() => toggleStatus(todo._id)} type="checkbox" />
                <span className="slider round"></span>
            </label>
            <div className="icon">{icon}</div>
            </div>
        )
    })
    return (
        <div>
            <h1>{type}</h1>
            <ul>{todos}</ul>
           
        </div>
    )
}

