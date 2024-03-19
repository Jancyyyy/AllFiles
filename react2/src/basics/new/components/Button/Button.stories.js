import React from "react";
import Button from "../components/Button/Button";
import { action } from '@storybook/addon-actions'
export default {
    title: 'form/Button',
    component: Button,
    //instead of writing in every story level we can directly write in comp level
    // args:{
    //     children:'Button',
    // }
}
export const Primary = () => (
    <Button variant='primary'>Primary</Button>
    // it defines storybook story name "primary".it renders button comp with "variant" prop set to primary
)
export const Secondary = () => (
    <Button variant="secondary" onclick={action('clicked')}>Secondary</Button>
)
export const Success = () =>
    <Button variant='success'>Success</Button>

export const Danger = () =>
    <Button variant='danger'>Danger</Button>



//the function will recieves args as an argument and we return button comp and spreading out the args object
const Template = args => <Button {...args} />

export const PrimaryA = Template.bind({})
PrimaryA.args = {
    variant: 'primary',
    children: 'primary Args'
}
export const SecondaryA = Template.bind({})
SecondaryA.args = {
    variant: 'secondary',
    children: 'secondary Args'
}

//  <Button variant='primary'>Primary</Button>
// export const Primary={
//     args:{
//         backgroundColor:'#ff0',
//         label:'Button',
//     },
// };
// export const Secondary={
//     args:{
//         backgroundColor:'#df0',
//         label:'Button',
//     },
// };
// export const Success={
//     args:{
//         backgroundColor:'#ff0',
//         label:'Button',
//     },
// };
// export const Danger={
//     args:{
//         backgroundColor:'#ff0',
//         label:'Button',
//     },
// };