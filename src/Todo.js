import React from 'react'

export default function todo({todo, toggleTodo, deleteTodo}) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  function handleDelClick() {
    deleteTodo(todo.name)
  }

  return (
    <div>
      <div className='singleTodo'>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Tehtävä</h3>
          {todo.name}
        </div>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Kuvaus</h3>
          {todo.description}
        </div>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Tehty</h3>
          <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
        </div>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Poista ({todo.name})</h3>
          <button onClick={handleDelClick} style={{color: "red", padding: "6px"}}>Poista </button>
        </div>
       
      </div>
      
      
    </div>
  )
}
