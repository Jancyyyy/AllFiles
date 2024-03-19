import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home'
import About from './About'
import Dashboard from './Dashboard'
import Pagenotfound from './Pagenotfound'
function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/dashboard/:name' element={<Dashboard/>}/>
    <Route path='*' element={<Pagenotfound/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
