import React from 'react'

export default function todo({todo, todos, toggleTodo, deleteTodo, setSubOf, setShowSub}) {

  const {name, id, description, subOf} = todo  
  const subTodos = todos.filter(x => x.subOf === name);

  function handleTodoClick() {
    toggleTodo(id)
  }
  
  function handleDelClick() {
    deleteTodo(name)
  }
  function handleAddSubTodo(){
    setSubOf(name)
  }

  function handleShowSubTodos() {
    setShowSub(name)
  }

  return (
    
      <div className='singleTodo'>   
      <div className='mainTitle'>          
          {subOf === '' 
        ? <h3 style={{margin: "5px"}}>{name}</h3>
        : <h3 style={{margin: "5px"}}> {name} (Ylä: {subOf})</h3>}
          
          
        </div>     
       
        <div className='subTitles'>
        
          <div className='todoTitles' style={{ width: "200px"}}>
            <h3 style={{margin: "5px"}}>Kuvaus</h3>
            <h4>{description}</h4>
            
          </div>
          <div className='todoTitles'>
            <h3 style={{margin: "5px"}}>Tehty</h3>
            <h4> <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/> </h4>
            
          </div>
          <div className='todoTitles'>
            <h3 style={{margin: "5px"}}>Alatehtävät <button onClick={handleShowSubTodos} style={{color: "red", padding: "6px", margin: "7px"}}>Näytä</button> 
            </h3>
            {subTodos.map(x => {
              return <h4 key={x.id}>{x.name}</h4>
            })}
            <button onClick={handleAddSubTodo} style={{color: "red", padding: "6px", margin: "7px"}}>Lisää</button>
            
          </div>
          <div className='todoTitles'>
            <h3 style={{margin: "5px"}}>Poista</h3>
            <h4><button onClick={handleDelClick} style={{color: "red", padding: "6px"}}>Poista </button></h4>
          </div>

        </div>
        
      </div>
      
   
  )
}
