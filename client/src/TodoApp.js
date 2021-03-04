
import API from "./utils/API"
import React, { useState, useEffect } from 'react'
import Header from "./components/Header"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import './App.css';

 export default function TodoApp() {


  const [todos, setTodos] = useState([])
  const [formObject, setFormObject] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadTodos()
  }, [])

  // Loads all books and sets them to books
  function loadTodos() {
    API.getBooks()
      .then(res => 
        setTodos(res.data)
      )
      .catch(err => console.log(err));
  };

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => loadTodos())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };


   function toggleStatus(id) {
    const updatedTodos = todos.map(todo =>{
      if (todo._id === id) {
        return {...todo, completed: !todo.completed }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)

   }

   function handleFormSubmit(event) {
    event.preventDefault();
      console.log(formObject)
      API.saveBook({
        title: formObject.title,
      })
        .then(res => loadTodos())
        .catch(err => console.log(err));
    // }
  };
  return (
    <div className="container">
      <Header message="Todo List" />
      <TodoForm todo={formObject} handleTodo={handleInputChange} handleSubmit={handleFormSubmit} />
      <TodoList todo={todos} toggleStatus={toggleStatus} handleDelete={deleteBook}/>
    </div>
  );
}


