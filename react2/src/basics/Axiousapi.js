import axios from 'axios';
import React,{useEffect, useState} from 'react'

const Axiousapi = () => {
    const[data,setData]=useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos').then(
            // response=>console.log(response.data)
            Response=>setData(Response.data)
        )
    }, [])
    return (
        <div>
        {
            data.map(item=> <li key={item.id}>{item.title}</li>) 
        }
        </div>
    )
}

export default Axiousapi