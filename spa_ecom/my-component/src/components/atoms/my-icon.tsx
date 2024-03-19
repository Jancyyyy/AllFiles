// import { Component, h, Prop } from '@stencil/core';
// import { IconDefinition, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// @Component({
//   tag: 'my-icons',
//   styleUrl: 'custom-icons.css',
//   shadow: true,
// })
// export class CustomIcons {
//   @Prop() iconName: string; // Assuming you pass the icon name as a string
//   @Prop() className: string;


//   render() {
//     const iconDefinition: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: this.iconName });


//     return (
//       <FontAwesomeIcon icon={iconDefinition} className={this.className} />
//     );
//   }
// }