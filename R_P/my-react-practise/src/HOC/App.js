import React from 'react'
import hoc from './HOC';
const App = (props) => {
  return (
    <h1>Hello Jancy!!!{props.name} </h1>
  )
}

export default hoc(App);
//hoc(App) means wrapping "app" in "hoc" 