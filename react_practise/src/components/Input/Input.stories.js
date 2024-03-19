import React from 'react';
import Input from './Input' ;
//this is used to validate the props 
export default{
    title:'form/Input',  //They can be grouped using \
    component:Input,
}

export const Small=()=>
<Input size='small' placeholder="Small size"/>
 
export const Medium=()=>
<Input size='medium' placeholder="Medium size"/>
 
export const Large=()=>
<Input size='large' placeholder="Large size"/>
 


//renaming the file name from small to smallinput
//  Small.storyName='SmallInput'
 
// import React from "react";
// import Buttonsize from "./Buttonsize";
// export default {
//     title: 'Input',
//     // title:'form/Input',//they are grouped
//     // title:'form/control/Input',//creates sub-folder
//     component: Buttonsize,
// }
// export const Small = () =>
//     <input size='small' placeholder='SMALL SIZE'/>
// export const Medium = () =>
//     <input size='medium' placeholder='MEDIUM SIZE'/>
// export const Large = () =>
//     <input size='large' placeholder='LARGE SIZE'/>

//     //renaming the file name
//     Small.storyname='SmallInput'
