import React from 'react'

export default function todo({todo, toggleTodo, deleteTodo, setSubOf}) {

  const {name, id, description, subOf} = todo  

  function handleTodoClick() {
    toggleTodo(id)
  }
  
  function handleDelClick() {
    deleteTodo(name)
  }
  function handleAddSubTodo(){
    setSubOf(name)
  }

  return (
    
      <div className='singleTodo'>
        <div className='todoTitles'>          
          {subOf === '' 
        ? <h3 style={{margin: "5px"}}>Tehtävä</h3>
        : <h3 style={{margin: "5px"}}> Tehtävä (Ylä: {subOf})</h3>}
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
          <h4><button onClick={handleAddSubTodo} style={{color: "red", padding: "6px"}}>Lisää alatehtävä</button></h4>
        </div>
        <div className='todoTitles'>
          <h3 style={{margin: "5px"}}>Poista</h3>
          <h4><button onClick={handleDelClick} style={{color: "red", padding: "6px"}}>Poista </button></h4>
        </div>
       
      </div>
      
   
  )
}
