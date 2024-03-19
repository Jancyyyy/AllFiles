
export const parameters={
  actions:{argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: (a, b) =>
      a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
  },
}
// /*THIS IS CONFIGURATION FILE FOR STORIES THAT WE WRITE
//  */
// /** @type { import('@storybook/react').Preview } */
// const preview = {
//   parameters: {
//     actions: { argTypesRegex: "^on[A-Z].*" },
//     options:{
//       storySort: (a, b) =>
//         a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true }),
//     },
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },
//   },
// };

// export default preview;
