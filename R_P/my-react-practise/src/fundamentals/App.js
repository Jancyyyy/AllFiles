import React,{ useEffect, useState } from 'react'
const App =()=> {
  const [data,setData]=useState({
    name:'',
    description:'',
  })
  const changeHandler=e=>{
    setData({...data,[e.target.name]:e.target.value});
  }
  const submitHandler=e=>{
    e.preventDefault();
    //by using fetch we are trying to POST the data.
    fetch('https://rest-apis-64365-default-rtdb.firebaseio.com/data.json',
    {
      method:'POST',
      body:JSON.stringify(data),
      headers:{
        "Content-type":"application/json; charset=UTF-8"
    }
    }
    ).then(res=>alert('Data Posted')).catch(err => console.log(err))
  }
  return(
    <div>
    <center>
    <form onSubmit={submitHandler}>
      <label>Name</label><br/>
      <input type='text' name='name' onChange={changeHandler}/><br/>
      <label>Description</label><br/>
      <input type='text' description='description' onChange={changeHandler}/><br/>
      <input type='submit' value='post data'/>
    </form>
    </center>
    </div>
  )








  /*const [data,setData]=useState([]);
  //calling API DATA using hooks (easy way)
    useEffect(()=>{
      // then is used for after fetching the data the response is changing into json
      fetch('https://api.punkapi.com/v2/beers?page=1&per_page=10').then(
      response=>response.json()
      //the data is stored in setData
      ).then(json=>setData(json))
    },[])
    return (
    <div className='App'>
    {data.map((item) => <p key={item.id}>{item.name}</p>)}
    </div>
  )*/
}

export default App

























/*//-----------EVENT HANDLERS AND FORMHANDLING & VALIDATION ---------------
import React, { useState } from "react";
const App = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  const changeHandler = (e) => {
    //... is destructing first(e.target.name is for name, and e.target.value is moved/stored to email)
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();//this will store the data in database(console)
    //validation
    if (data.password.length < 5) {
      alert("Password must be at least 5 characters long");
    } else {
      // Store the data in the database or perform other actions
      console.log("Data submitted:", data);
    }//the data will be shown in DB
  };
  return (
    <div>
      <center>
        <button onClick={() => alert('Hello')}>onClickClickMe</button><br />
        Name:{nome}
        <input type="text" nome="name" onChange={(e) => setNome(e.target.value)} />
        <form onSubmit={submitHandler}>
          <label style={{color:'green', fontFamily:'Tahoma'}}>E-mail</label>
          <input type="text" name="email" onChange={changeHandler} /><br />
          <label>Password</label>
          <input type="password" name="password" onChange={changeHandler} /><br />
          <input type="submit" value="Login" className='btn btn-primary'/>
        </form>
      </center>
    </div>
  );
};
export default App;
//-----STATES & PROPS---------------------
import React, { useState } from "react";
import Test from "./Test";
const App=()=>{
  const [data,setData]=useState({
    name:'Jhon',
    // name:'nan',
    age:24
  });
  //destructuring
  const {name,age}=data;
  return(
    <div>
    <Test name={name} age={age}/>
    </div>
  )
}
export default App;
//---------------2---------------------------------
import React, { useState } from "react";

const App=()=>{
  const [data,setData]=useState({
    name:'Jhon',
    // name:'nan',
    age:22
  });
  //destructuring
  const {name,age}=data;
  return(
    <div>
    <center>
    <h1>name:{name} and Age:{age}</h1>
    </center>
    </div>
  )
}
export default App;
//------------------------1----------------------------------------

import './App.css';
import React from 'react';
import Test from './test';
//const App=()=>{}
//Functional base4d component
function App() {
  return (
    <div>
    <center>
    <h3>Hello</h3>
    </center>
    </div>
  );
}
//------------------------------------------
class App extends React.Component{
//class component
render(){
  let name="Jhon";
  return(
    <div>
    <center>
    <Test/>
    <h2>Welcome variable component {name}</h2>
    <h3> I'm from class component</h3>
    </center>
    </div>
  )
}
}
//--------------------------------------------
class App extends React.Component{
  state={
    name:'jhon',
    age:22,
    data:[]
  }
  render(){
  return(
    <div>
    <center>
    <Test name={this.state.name} and age={this.state.age}/>
    </center>
    </div>
  )
}
}

export default App;*/