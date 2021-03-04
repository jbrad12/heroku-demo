import React from "react"

export default function TodoForm({ handleTodo, handleSubmit, todo }) {
    return (
        <div className="todoform">
        <h2>What do you have to do?</h2>
        <form className="form" onSubmit={handleSubmit}>
            <input onChange={handleTodo} name="title" value={todo.title}/>
            <button className="button">Add Todo</button>
         </form>
        </div>
    )
}