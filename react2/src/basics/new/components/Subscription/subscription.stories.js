import React from "react";
import { Primary } from '../../COMP/Button/Button.stories';
import { Large } from '../Input/Input.stories';

export default {
    title: 'form/subscription'
}
//writing a story
export const PrimarySubscription = () => (
    //including other 2 stories which we have importec
    //returning react fragment-adding multiple elements without any extra node to the tag
    <>
        <Large />
        <Primary />
    </>
)