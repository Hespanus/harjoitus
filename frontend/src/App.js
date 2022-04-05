import React, {useState, useRef, useEffect} from "react";
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';
import Axios from "axios";





const apiUrl = `http://localhost:8080`;


function App() {
  const [subof, setSubof] = useState("")
  const [todos, setTodos] = useState([])
  const [todoShow, setTodoShow] = useState([]) 
  const [subOfShow, setSubofShow] = useState('')
  const todoNameRef = useRef()
  const descriptionRef = useRef()

  useEffect(async() => {
    let storedTodos = []
    await Axios.get(apiUrl + '/todos')
        .then(resp => {
          for (let x of resp.data){
            if (x.id){
              let tempTodo = {}
              tempTodo['name'] = x.name
              tempTodo['id'] = x.id
              tempTodo['description'] = x.description
              tempTodo['complete'] = x.complete
              tempTodo['subof'] = x.subof


              storedTodos.push(tempTodo)
            }
          }
        })
    if (storedTodos) {
      console.log(storedTodos)
      setTodos(storedTodos)

      const newTodos = storedTodos.filter(todo => todo.subof === '')
      console.log(newTodos)
      setTodoShow(newTodos)

    }
  }, [])
  



  useEffect(() => {    

    const tempTodos = todos.filter(todo => todo.subof === subOfShow)
    setTodoShow(tempTodos)
  }, [subOfShow, todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    let complete = !todo.complete
    Axios.post(apiUrl + `/todo-update`,
        {id:id, complete: complete})
        .then(res => {
          console.log(res)
          if(res.data.modifiedCount > 0){
            todo.complete = !todo.complete
            setTodos(newTodos)
          }
        })
        .catch(error => {
          console.error("Error!", error)
        })


  }

  function handleSetSubOf(subof) {
    setSubof(subof)
     
  }
    
  function handleAddTodo()  {

    const name = todoNameRef.current.value
    const descr = descriptionRef.current.value
    if (name === '') return
      Axios.post(apiUrl + "/todo-create",
            {id: uuidv4(), name: name, description: descr, complete: false, subof: subof}
          )
          .then(res => {
            let resp = res.data
            let tempTodo = {}
            tempTodo['name'] = resp.name
            tempTodo['id'] = resp.id
            tempTodo['description'] = resp.description
            tempTodo['complete'] = resp.complete
            tempTodo['subof'] = resp.subof

            let temptodos = [...todos];
            temptodos.push(tempTodo);

            setTodos(temptodos);

          })
          .catch(error =>{
            console.error("Error!", error);
          })




    todoNameRef.current.value = null
    descriptionRef.current.value = null
    
    setSubof('')
  }

  function deleteTodo(id) {
    Axios.post(apiUrl + `/todo-delete`,
        {id:id})
        .then(res => {
          console.log(res)
          if(res.data.deletedCount > 0){
            const newTodos = todos.filter(todo => todo.id !== id)
            setTodos(newTodos)
          }
        })
        .catch(error => {
          console.error("Error!", error)
        })


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
      {subof === ''
        ? <h3>Lisää uusi tehtävä</h3>
        : <h3>Lisää uusi alatehtävä tehtävälle: {subof}</h3>}
      <input ref={todoNameRef} type="text" />
      <textarea ref={descriptionRef} type="text"></textarea>
      <button onClick={handleAddTodo}>Lisää</button>


    </div>    
    
    </>
  )
}

export default App;
