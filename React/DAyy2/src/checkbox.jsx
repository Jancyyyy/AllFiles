// import React from 'react';

// // State

// // Like props state also holds information about the component,
// // but the kind of information and how do you handle it
// // that is going to be different than the props.

// // State is changable.

// class CheckBox extends React.Component
// {
//     constructor(){
//         super();
//         this.state = {
//             checked:true,
//         }
//     }
//     // Event Listener for checkbox's change event
//     handleChange(){
//         console.log('handleChange!');
//         // You shouldn't modify state directly, always use setState method
//         // this.state.checked = !this.state.checked;

//         // Synchronous version of setState
//         // this.setState({checked: !this.state.checked});

//         // Asynchronous version of setState
//         this.setState((prevState,props) =>{
//             return {checked:!prevState.checked};
//         })
//     }
//     render(){
//         let msg = '';
//         if(this.state.checked){
//             msg='Checked';
//         }else{
//             msg='Unchecked';
//         }
//         return (
//             <div>
//                 {/* Synthetic Events - cross browser */}
//                 <input type='checkbox' defaultChecked={true} 
//                 // onChange={this.handleChange.bind(this)}/>
//                 onChange={()=>{
//                     //this.setState({checked:!this.state.checked});
//                     this.handleChange();
//                 }}/>
//                 <h1>The box is '<b className='text-danger'>{msg}!</b>'</h1>
//             </div>
//         )
//     }
// }

// export default CheckBox;

import React, { useState } from 'react';

// functional Component

function CheckBox() {
    // React 16.8 onwards hooks
    // const [stateValue,updateFn] = useState(initialStateValue);
    const [checked, setChecked] = useState(true);
    let msg = '';
    if (checked) {
        msg = 'Checked';
    } else {
        msg = 'Unchecked';
    }
    return (
        <div>
        <input type='checkbox' defaultChecked={true} 
        onChange={()=> setChecked(!checked)}/>
        <h1>The box is '<b className='text-danger'>{msg}!</b>'</h1>
    </div>
    )
}

export default CheckBox;