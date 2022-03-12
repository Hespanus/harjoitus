import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {

  }, [todos])

  function handleAddtodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(x => {
      return [...x, {id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }
  return (
    <>
    <TodoList todos ={todos} />
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddtodo}>Add Todo</button>
    <button>Clear completed Todos</button>
    <div>0 left to do</div>
    </>
    
  )
}

export default App;
