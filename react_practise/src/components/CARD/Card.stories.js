import React from 'react';
import Card from './Card';

export default {
 title: 'Components/Card',
 component: Card,
};
const Template = (args) => <Card {...args} />;
 
export const Image1 = Template.bind({});
Image1.args = {
imageUrl: 'https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580',
  productName: 'Product Name',
  description: 'This is a brief description of the product.',
  initialRating: 3, // Add initialRating prop
};
 
export const Image2 = Template.bind({});
Image2.args = {
imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwNG71aZrØRARØDQ8adBSyHPz@Hj9dZK0aTQd9Q112hee12615V_',
  productName: 'Product Name1',
  description: 'This is a brief description of the product.',
  initialRating: 4, // Add initialRating prop
};





// import React from 'react';
// import Card from './Card';
 
// export default {
//   title: 'Components/Card',
//   component: Card,
// };
 
// const Template = (args) => <Card {...args} />;
 
// export const Image1 = Template.bind({});
// Image1.args = {
// imageUrl: 'https://slp-statics.astockcdn.net/static_assets/staging/24winter/home/curated-collections/card-2.jpg?width=580',
//   productName: 'Product Name',
//   description: 'This is a brief description of the product.',
//   initialRating: 3, // Add initialRating prop
// };
 
// export const Image2 = Template.bind({});
// Image2.args = {
// imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwNG71aZrØRARØDQ8adBSyHPz@Hj9dZK0aTQd9Q112hee12615V_(',
//   productName: 'Product Name1',
//   description: 'This is a brief description of the product.',
//   initialRating: 4, // Add initialRating prop
// };

