import React, {useState, useRef, useEffect} from "react";
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';



const STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])
  

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }
    
  function handleAddtodo(e) {
    const name = todoNameRef.current.value
    let descr = 'Jotain'
    if (name === '') return
    setTodos(x => {
      return [...x, {id: uuidv4(), name: name, description: descr, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function deleteTodo(name) {
    const newTodos = todos.filter(todo => todo.name !== name)
    setTodos(newTodos)
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
   
    <>
    { todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} deleteTodo={deleteTodo} />
    })  }
    
    
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddtodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear completed Todos</button>
    <div>{todos.filter(todo => !todo.complete).length}left to do</div>
    
    </>
  )
}

export default App;
