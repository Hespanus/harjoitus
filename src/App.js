import React, {useState, useRef, useEffect} from "react";
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';



const STORAGE_KEY = 'todoApp.todos'


function App() {
  const [subOf, setSubof] = useState('')
  const [todos, setTodos] = useState([])
  const [todoShow, setTodoShow] = useState([]) 
  const [subOfShow, setSubofShow] = useState('')
  const todoNameRef = useRef()
  const descriptionRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (storedTodos) {
      setTodos(storedTodos)
      const newTodos = storedTodos.filter(todo => todo.subOf === '')
      setTodoShow(newTodos)
    }    
  }, [])
  

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    
  }, [todos])

  useEffect(() => {    
    console.log(subOfShow)
    const tempTodos = todos.filter(todo => todo.subOf === subOfShow)
    setTodoShow(tempTodos)
  }, [subOfShow, todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleSetSubOf(subOf) {
    setSubof(subOf)
     
  }
    
  function handleAddtodo() {
    
    const name = todoNameRef.current.value
    const descr = descriptionRef.current.value
    if (name === '') return
    setTodos(x => {
      return [...x, {id: uuidv4(), name: name, description: descr, complete: false, subOf: subOf }]
    })
    todoNameRef.current.value = null
    descriptionRef.current.value = null
    
    setSubof('')
  }

  function deleteTodo(name) {
    const newTodos = todos.filter(todo => todo.name !== name)
    setTodos(newTodos)
  }
  
  function handleShowSub (subOfx) {
    setSubofShow(subOfx)
  }
  
  return (
   
    <>
    { todoShow.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} todos={todos}
       deleteTodo={deleteTodo} setSubOf={handleSetSubOf} setShowSub={handleShowSub} />
    })  }
    
    <div className="todoCreate">
      {subOf === '' 
        ? <h3>Lisää uusi tehtävä</h3>
        : <h3>Lisää uusi alatehtävä tehtävälle: {subOf}</h3>}
      <input ref={todoNameRef} type="text" />
      <textarea ref={descriptionRef} type="text"></textarea>
      <button onClick={handleAddtodo}>Lisää</button>    
      <div>{todos.filter(todo => !todo.complete).length}left to do</div>

    </div>    
    
    </>
  )
}

export default App;
