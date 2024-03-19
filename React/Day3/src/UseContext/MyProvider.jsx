import React from "react";
import { useState } from "react";
import MyContext from "./MyContext";
// const MyProvider = (props) => {
//     const [score, setScore] = useState(69)
//     return (
//         <MyContext.Provider
//             value={{
//                 score: score
//                 // newval: 0
//             }}>
//                 {props.children}
//         </MyContext.Provider>
//     )
// }
const MyProvider = (props) =>{
    const [score,setScore] = useState(79);
    return (
        <MyContext.Provider
        value={{score:score}}>
            {props.children}
        </MyContext.Provider>
    );
}
export default MyProvider;