import React, { useState } from 'react';

const buttonStyle = {
    color: 'maroon',
    backgroundColor: 'peachpuff',
    fontSize: 'x-large',
    margin: '10px'
}
function Todos() {
    // useState
    const [todos, setTodos] = useState(['Prepare Presentation','Create Assignments']);
    const [todo,setTodo] = useState('');
    return (
        <div>
          Todo:- <input type='text' 
          onChange={(evt) =>{setTodo(evt.target.value)}}/>
          <button style={buttonStyle}
          onClick={()=>{
            console.log(todo);
            setTodos(todos => [...todos,todo]);
          }}>Add Todo!</button>
          <ul>
            {
                todos.map((td) =>{
                    return <h6 className='display-6 text-primary' key={td}>{td}</h6>
                })
            }
          </ul>
        </div>
    )
}

export default Todos;