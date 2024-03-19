import React, { useEffect, useState } from 'react'

const Fetching = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos').then(
      //convert files to json files
      response=>response.json()
    // ).then(json=>console.log(json))
    ).then(json=>setData(json))
  },[])
  return (
    <div>
    {
      data.map(item=><li key={item.id}>{item.title}</li>)
    }
    </div>
  )
}

export default Fetching