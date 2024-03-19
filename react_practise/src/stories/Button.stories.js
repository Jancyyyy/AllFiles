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
// };

// // More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
// export const Primary = {
//   args: {
//     primary: true,
//     label: 'Button',
//   },
// };

// export const Secondary = {
//   args: {
//     label: 'Button',
//   },
// };

// export const Large = {
//   args: {
//     size: 'large',
//     label: 'Button',
//   },
// };

// export const Small = {
//   args: {
//     size: 'small',
//     label: 'Button',
//   },
// };

import React from "react";
import { Meta, Story } from "@storybook/react";
import Button from "../Components/atoms/Button";

export default {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
};

export const Primary = () => (
  <Button onClick={() => console.log("Button clicked")}>Primary Button</Button>
);

export const Secondary = () => (
  <Button
    onClick={() => console.log("Button clicked")}
    style={{ backgroundColor: "gray", color: "white" }}
  >
    Secondary Button
  </Button>
);
