import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import About from './About';
import './index1.css';
const Home = () => {
  const user ='jhon';
  return (
    <div>
      <center>
        <h3>Welcome to homepage</h3>
        <Link to={`/dashboard/name=${user}&age=${22}`} className='Link'>Dashboard</Link><br/>{""}
        <Link to='/about' className='Link'>About</Link>
      </center>
    </div>
  )
}

export default Home
//12---<Link to={`/dashboard/${user}`} className='Link'>Dashboard</Link><br/>?