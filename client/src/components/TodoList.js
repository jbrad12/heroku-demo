import Todo from "./Todo"
import React from "react"

export default function TodoList({ todo, toggleStatus, handleDelete }) {
    const completed = todo.filter(todo => todo.completed)
    const incomplete = todo.filter(todo => !todo.completed)

    return (
        <div className="todolist">
            <Todo todo={incomplete} type={"Incomplete"} toggleStatus={toggleStatus} />
            <Todo todo={completed} type={"Completed"} toggleStatus={toggleStatus} handleDelete={handleDelete}/>
        </div>
    )
}