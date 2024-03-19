import React from 'react'

const hoc = (Component) => {
  return (
    //accepting the comp of app.js and we are trying to return with in a class level comp
    class extends React.Component{
        state={
            auth:true
        }
        render(){
            return(
                <div>
                {this.state.auth ? <Component name="Jhon"/>: <h1>Please Login</h1>}
                </div>
            )
        }
    }
    )
}

export default hoc