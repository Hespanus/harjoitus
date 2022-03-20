import React from 'react'

export default function todo({todo, toggleTodo, deleteTodo}) {

  const {name, id, description} = todo  

  function handleTodoClick() {
    toggleTodo(id)
  }
  
  function handleDelClick() {
    deleteTodo(name)
  }

  return (
    <div>
      <div className='singleTodo'>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Tehtävä</h3>
          <h4>{name}</h4>
          
        </div>
        <div className='todoTitles' style={{ width: "200px"}}>
          <h3 style={{margin: "5px"}}>Kuvaus</h3>
          <h4>{description}</h4>
          
        </div>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Tehty</h3>
          <h4> <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/> </h4>
          
        </div>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Poista</h3>
          <h4><button onClick={handleDelClick} style={{color: "red", padding: "6px"}}>Poista </button></h4>
        </div>
       
      </div>
      
      
    </div>
  )
}
