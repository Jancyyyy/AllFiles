import React, {useState} from 'react';
const buttonStyle = {
    color:'maroon',
    backgroundColor:'peachpuff',
    fontSize:'x-large',
    margin:'10px'
}
const pStyle = {    
    marginLeft:'100px',
    fontSize:'xx-large',
    maxWidth:'fit-content'
}
export function Counter(){
    // useState react hook
    const [count,setCounter] = useState(0);
    return(
        <div style={{ border: 'solid 10px gray', maxWidth: 'fit-content' }}>
            <p style={pStyle}>Counter <b style={{ fontWeight: 'bolder', color: 'maroon' }}>{count}</b></p>
            <button style={buttonStyle} onClick={() => setCounter(count+1)}>
                Increment!
            </button>
            <button style={buttonStyle} onClick={() => setCounter(count-1)}>
                Decrement!
            </button>
        </div>
    )
}
//counter.jsx
/*import "./counter.css"
import React,{ useState } from 'react' 
export default function App() {
  const [counter, setCounter] = useState(0);
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
  //decrease counter
  const decrease = () => {
    setCounter(count => count - 1);
  };
  //reset counter 
  //const reset = () =>{
  //  setCounter(0)}
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={increase}>+</button>
        <button className="control__btn" onClick={decrease}>-</button>
      </div>
    </div>
  );
}
//counter.css
.counter {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    row-gap: 20px;
}
.counter h1 {
    color: rgb(16, 0, 54);
    font-size: 40px;
    font-family: cursive;
}
.counter__output {
    font-size: 40px;
    color: rgb(116, 7, 7);
}
.btn__container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 20px;
}
.control__btn {
    font-size: 20px;
    padding: 10px 20px;
    background-color: transparent;
    color: rgb(16, 0, 54);
    border: 1px solid rgb(16, 0, 54);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
.control__btn:hover {
    background-color: rgb(16, 0, 54);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(16, 0, 54);
}
//person.
/*import "./counter.css"
import React,{ useState } from 'react' 
export default function App() {
  const [counter, setCounter] = useState(0);
  //increase counter
  const age = () => {
    setCounter(count => count + 1);
  };
  //decrease counter
  const weight = () => {
    setCounter(count => count - 10);
  };
  //reset counter 
  //const reset = () =>{
  //  setCounter(0)}
  return (
    <div className="counter">
      <h1>React Counter</h1>
      <span className="counter__output">{counter}</span>
      <div className="btn__container">
        <button className="control__btn" onClick={age}>+</button>
        <button className="control__btn" onClick={weight}>-</button>
      </div>
    </div>
  );
}
//person.css
*.counter {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    row-gap: 20px;
}
.counter h1 {
    color: rgb(16, 0, 54);
    font-size: 40px;
    font-family: cursive;
}
.counter__output {
    font-size: 40px;
    color: rgb(116, 7, 7);
}
.btn__container {
    display: flex;
    justify-content: center;
    flex-direction: row;
    column-gap: 20px;
}
.control__btn {
    font-size: 20px;
    padding: 10px 20px;
    background-color: transparent;
    color: rgb(16, 0, 54);
    border: 1px solid rgb(16, 0, 54);
    cursor: pointer;
    transition: 0.2s ease-in-out;
}
.control__btn:hover {
    background-color: rgb(16, 0, 54);
    color: rgb(255, 255, 255);
    border: 1px solid rgb(16, 0, 54);
} */