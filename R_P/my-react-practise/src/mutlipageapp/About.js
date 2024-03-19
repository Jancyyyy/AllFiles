import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
      <center>
      <h3>You are in About page</h3>
      <Link to='/' className='Link'>Back To Home</Link><br/>
      </center>
    </div>
  )
}

export default About
