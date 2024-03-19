import React from 'react'
import { Link } from 'react-router-dom'
import './index1.css';
// import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
const Dashboard = () => {
  let {search} = useLocation();
  let params=new URLSearchParams(search);
  console.log(search);
  return (
    <div>
      <center>
      <h3>Welcome to Dashboard page</h3>
      <p>Name:{params.get('name')}</p>
      <p>Age:{params.get('age')}</p>
      <Link to='/' className='Link'>Back To Home</Link>
      </center>
    </div>
  )
}

export default Dashboard
