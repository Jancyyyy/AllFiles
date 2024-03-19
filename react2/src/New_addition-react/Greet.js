// import React from "react";
// const Greet=()=>{
//     return (
//         <h1>Hello Jancyyy</h1>
//     )
// }
// export default Greet
import React from "react";
export const Greet=(props)=>{
    return (
        <h1>Hello {props.name} {props.heroname}</h1>
    )
}