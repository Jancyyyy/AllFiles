// import React, {Component} from "react";

// class Main extends Component {
//     constructor(){
//         super();
//         this.state={
//             name:'Sachin'
//         }
//         this.handleChange = this.handleChange.bind(this);
//     }
//     handleChange(evt){
//         this.setState({name:evt.target.value});// First modify the state
//     }
//     handleClick(){
//         console.log(this.t1.value);
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" /> <br/>
//                 <input type="text" defaultValue='Rahul' /><br/>
//                 {/* <input type="text" value='Ajay' /><br/> */}

//                 {/* Controlled Component */}
//                 <input type="text" value={this.state.name} 
//                 onChange={this.handleChange}/><br/>
//                 <h3>{this.state.name}!</h3>

//                 {/* Uncontrolled Component */}
//                 <input type="text" defaultValue={this.state.name} 
//                 ref={(input) => this.t1 = input} /><br/>
//                 <button onClick={this.handleClick.bind(this)}>Get Value!</button>
//             </div>
//         )
//     }
// }

// export default Main;


import React, {useState,useRef} from "react";

function Main() {
    const [name,setName] = useState('Sachin');
    const inputRef = useRef(HTMLInputElement);

    const handleChange = function(evt){
        setName(evt.target.value);
    }
    const handleClick = function(){
        console.log(inputRef.current.value);
    }
    return (
        <div>
            <input type="text" /> <br />
            <input type="text" defaultValue='Rahul' /><br />
            {/* <input type="text" value='Ajay' /><br/> */}

            {/* Controlled Component */}
            <input type="text" value={name} 
             onChange={handleChange} /><br />
            <h3>{name}!</h3>

            {/* Uncontrolled Component */}
            <input type="text" defaultValue={name}
                ref={inputRef} /><br />
            <button onClick={handleClick}>Get Value!</button>
        </div>
    )
}

export default Main;
