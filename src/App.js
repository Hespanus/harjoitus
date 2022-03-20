import React, {useState, useRef, useEffect} from "react";
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';



const STORAGE_KEY = 'todoApp.todos'

function App() {

  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()
  const descriptionRef = useRef()

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
    
  function handleAddtodo() {
    const name = todoNameRef.current.value
    let descr = descriptionRef.current.value
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
  function addDescription() {

  }

  
  return (
   
    <>
    { todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} deleteTodo={deleteTodo} />
    })  }
    
    <div className="todoCreate">
      <input ref={todoNameRef} type="text" />
      <textarea ref={descriptionRef} type="text"></textarea>
      <button onClick={handleAddtodo}>Add Todo</button>    
      <div>{todos.filter(todo => !todo.complete).length}left to do</div>

    </div>
    
    
    </>
  )
}

export default App;
