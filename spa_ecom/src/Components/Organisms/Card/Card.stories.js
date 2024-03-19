import React from 'react';
import Card from './Card';

export default {
 title: 'Components/Card',
 component: Card,
};
const Template = (args) => <Card {...args} />;
export const ImageCard = Template.bind({});
ImageCard.args = {
 imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQok-h1Luj3jjT4woPMDmrXYSfF4dztUMoKNI906e-hKC6KoON_7JOoiicRaQ&s',
 productName: 'Shopping Icon',
 description: 'This is a brief description of the product.',
 price:'8909',
 rating:'3',
};

