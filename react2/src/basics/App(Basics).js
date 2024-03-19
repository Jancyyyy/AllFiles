/*class component(best features)-react life cycle, statemanagement
import React, { Component } from "react";
class App extends Component{
    state={
      name:"Jancyyyyyy",
    }
  render(){
  return(
    <div>
    this-refering current object
    <h2>Hello {this.state.name} </h2>
    </div>
  )
}
}
export default App;*/
//--------------------------------------------------------------------------------------
/*import React, { useState } from "react";
//function component-there will be no rendering only returning will be there
const App = () => {
  const[name,setName]=useState('Jancyyy');
  return (
    <div>
    <h2>hello {name}</h2>
    </div>
  )
}
export default App;
//------------------------------------------------------------------------------------------------
import React from "react";
import './App.css';
const App=()=>{
  return(
    <div className="changecolor">
    <button onClick={()=>console.log("clicked")}>ClickHere!</button >
    </div>
  )
}
export default App;*/
//---------------------------------------------------------
/*import React, { useState } from "react";
const App=()=>{
  const [count,setCount]=useState(0);
  return(
    <div>
    <center>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>increment</button>
    <button onClick={()=>setCount(count-1)}>decrement</button>
    </center>
    </div>
  )
}
export default App*/
//------------------------------------------------------------
/*import React,{useState,useEffect} from "react";
const App=()=>{
  const[count,setCount]=useState(0);
  useEffect(()=>console.log(count),[count]);
  return(
    <div>
    <p>you clicked {count} times</p>
    <button onClick={()=>setCount(count + 1)}>
    change
    </button>
    </div>
  )
}
export default App;
*/
//--------------------------------------------------------------
/*import React, { useState } from "react";
const App=()=>{
  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  //e=event, it will handle the changes when we are typing
  const handler =e=>{
    setUsername(e.target.value)
  }
  const handler1=e=>{
    setPassword(e.target.value)
  }
  return(
    <div>
    <center>
    <form>
    <input type='text' placeholder="enter username" value={username} 
    name="username" onChange={handler}
    /><br/>
    <input type="text" placeholder="enter password" value={password} 
    name="password" onChange={handler1}
    /><br/>
    <button onClick={()=>console.log(username,password)}>submit</button>
    </form>
    </center>
    </div>
  )
}
export default App;*/
//--------------------------------------------------------------------------
/*import React, { useState } from "react";
const App=()=>{
  const[data,setData]=useState({
    username:'',
    password:'',
  });
  const{username,password}=data;
  const onChange=e=>{
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler=e=>{
    e.preventDefault();
    console.log(data);
  }
  return(
  <div>
  <center>
  <form onChange={submitHandler}>
  <input type="text" placeholder="username" value={username}
  name="username" onChange={onChange}/><br/>
  <input type="password" placeholder="password" value={password}
  name="password" onChange={onChange}/><br/>
  <input type="submit" name="submit"/>
  </form>
  </center>
  </div>
  )
}
export default App;
*/
//-----------------------------------------------------------------------------------
/*import React from "react";
function App(){
  const arr=["ReactJs","NodeJs","ReactNative","ExpressJs","Flutter","NodeJs"]
  //Array with multiple objects 
  const arr1=[
    {
      id:1,
      title:"ReactJs"
    },
    {
      id:2,
      title:"NodeJs"
    },
    {
      id:3,
      title:"ReactNative"
    },
    {
      id:4,
      title:"ExpressJs"
    },
    {
      id:5,
      title:"Flutter"
    },
    {
      id:6,
      title:"NodeJs"
    },
  ]
  return(
    <div>
    {
      arr.map(
        (value,index)=><li key={index}>{value}</li>
      )
    }
    // for multiple array ,for this variable "value=object" the object will be assigned.
    {
      arr1.map(
        (value)=><li key={value.id}>{value.title}</li>
      )
    }
    </div>
  )
}
export default App;*/
//----------------------------------------------------------------------------------------------------
/*import React from "react";
function App(){
  const names=['jancy','jaggu','fancy','nancy','dancy','bancy']
  const filtered1=names.filter(name=>name.includes('j'))
  const arr=[10,20,30,40,50,60,70,80,90,100]
  //so,we are declaring arr1 bcoz each and every item which is coming from
  //arr will be stored in arr1
  const filtered2=arr.filter(arr1=>arr1>60)
  return(
    <div>
    {
      filtered1.map(item=><li>{item}</li>)
    }
    {
      filtered2.map(item=><li>{item}</li>)
    }
    </div>
  )
}
export default App;*/
//----------------------------------------------------------------------------------------------------------
