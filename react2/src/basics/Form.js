import React, { useState } from "react";
const Form=()=>{
  const[data,setData]=useState({
    username:'',
    password:''
  })
  //destructing
  const{username,password}=data;
  const changeHandler=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault()
    console.log(data)
  }
  return(
    <div>
    <center>
    <form onSubmit={submitHandler}>
    <input type="text" placeholder="username" name="username" 
    value={username} onChange={changeHandler}/><br/>
    <input type="password" placeholder="password" name="password" 
    value={password} onChange={changeHandler} /><br/>
    <input type="submit" name="submit"/>
    </form>
    </center>
    </div>
  )
}
export default Form;