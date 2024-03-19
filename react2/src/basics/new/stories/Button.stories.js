import { Button } from './Button';
export default {
  component: Button,
};
export const Primary = {
  args: {
    backgroundColor: '#ff0',
    label: 'Button',
  },
};
export const Secondary = {
  args: {
    ...Primary.args,
    label: 'secondary',
  },
};
export const Tertiary = {
  args: {
    ...Primary.args,
    label: 'primary',
  },
};





// // import { ComponentStory,ComponentMeta } from '@storybook/react';}
// import { Button } from './Button';

// // More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
// export default {
//   title: 'Example/Button',
//   component: Button,
//   parameters: {
//     // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
//     layout: 'centered',
//   },
//   // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
//   tags: ['autodocs'],
//   // More on argTypes: https://storybook.js.org/docs/api/argtypes
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// } 
// // as Meta<typeof Button>;

// // const Template: ComponentStory<typeof Button> = (args)=><Button{... args}/>;

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

// // export const Primary = Template.bind({});
// export const primary={
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// // export const Secondary = Template.bind({});
// export const Secondary={
//   args: {
//     label: 'Button',
//   },
// };

// // export const Large = Template.bind({});
// export const Large={
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// // export const Small = Template.bind({});
// export const Small={
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

// // export const Red=Template.bind({});
// export const Red={
//   args:{
//     backgroundColor:'red',
//     label:'Button',
//   },
// };
// Red.argTypes={
//   // backgroundColor:{
//     value:{
//       control:'inline-radio',
//       Option:['yellow']
//     // Option:['red','yellow','purple'],
//   }
// // },
// }
// // export default {
// //   component: Example,
// //   argTypes: {
// //     value: {
// //       // ⛔️ Deprecated, do not use
// //       defaultValue: 0,
// //     },
// //   },
// //   // ✅ Do this instead
// //   args: {
// //     value: 0,
// //   },
// // };