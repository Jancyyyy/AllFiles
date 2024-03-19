import React from 'react'
// Presentational Component
export default class Todo extends React.Component{
    constructor(props){
        super();
    }
    render(){
        const {complete, text} = this.props;// ES2015 - Destructuring
        const icon = complete ? "\u2714" : "\u2716"

        return (
            <li className='list-unstyled display-6 text-primary'>
                <span>{text}</span>
                <span>{icon}</span>
            </li>
        )
    }
}