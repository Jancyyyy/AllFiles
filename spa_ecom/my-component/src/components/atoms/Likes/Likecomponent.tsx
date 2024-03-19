  
import { Component, h, State, Prop } from '@stencil/core';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
@Component({
 tag: 'my-likecomponent',
 styleUrl: 'Likecomponent.css',
 shadow: true,
})
export class Likecomponent {
 @State() isLiked: boolean = false;
 @Prop() size: string = '24px'; // Default icon size
 toggleLike = () => {
   this.isLiked = !this.isLiked;
 };
 render() {
   const icon = this.isLiked ? fasHeart : farHeart;
   const color = this.isLiked ? 'red' : 'grey';
   return (
<svg viewBox="0 0 600 600" width={this.size} height={this.size} fill={color} onClick={this.toggleLike}>
<path d={icon.icon[4] as string}></path>
</svg>
   );
 }
}