import React from "react";
import MyContext from "./MyContext";
import {useContext} from 'react';
// function DisplayScore(props){
//     return (
//         <MyContext.Consumer>
//             {context =>(
//                 <>
//                     <p>
//                         {context.score}
//                     </p>
//                         {/* <input type="number" placeholder="Enter score" onChange={(e)=>{context.newval = e.target.value; console.log(context.newval)}}/>
//                     <MyContext.Provider>
//                         value={{
//                             ...context, newval:context.newval
//                         }}
//                         {props.child}
//                     </MyContext.Provider>
//                     {context.newval} */}
//                 </>
//             )}
//         </MyContext.Consumer>
//     );
// }
// import React from "react";
// import { useContext } from "react";
// import Myprovider from  './MyProvider';
// // import MyContext from "./MyContext";

function DisplayScore(){
     const score = useContext(MyContext);
     return (
     <>
     {score.score}
     </>
     );
    }
export default DisplayScore;
