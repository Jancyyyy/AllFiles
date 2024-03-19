import React from 'react';

// props - properties

// Unidirectional Data Flow

// props are there to hold some information as well as to
// display(represent) that information.
// For props generally data / information comming from
// the parent component.

// props are immutable.

// // class component

// class Greet extends React.Component{
//     static defaultProps = {
//         name:'Abhijeet'
//     }
//     render(){
//         return <h1 className='text-center'>Welcome {this.props.name}!</h1>
//     }
// }

// export default Greet;

// // functional component

const name='Jancy';

function Greet(props){
    return (
        (props.name)?
        <h1>Welcome {props.name}!</h1>
        :<h1>Welcome {name}!</h1>
    )
}

export default Greet;