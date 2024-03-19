import React from "react";
import FirstPro from "./first";
// import Button from "../Button/Button";
export default{
    //sets the title of comp in storybook
    title:'01_first/FirstPro',
    //specifies which comp this story is associated with
    component:FirstPro,
};
export const First=()=>
<FirstPro label="clickme" />;
export const Primary=()=>
<FirstPro label="primary button"/>;
export const Secondary=()=>
<FirstPro label="secondary button"/>;