import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';
@Component({
  tag: 'my-starrating',
  styleUrl: 'Starrating.css',
  shadow: true,
})
export class StarRating {
  @Prop() totalStars: number = 5;
  @State() currentRating: number = 0;
  @Event() ratingChanged: EventEmitter;
  private handleRatingChange(newRating: number) {
    this.currentRating = newRating;
    this.ratingChanged.emit({ rating: newRating });
  }
  render() {
    return (
      <div class="star-rating">
        {Array.from({ length: this.totalStars }).map((_, index) => {
          const starClass = index < this.currentRating ? 'star rated' : 'star';
          return (
            <span class={starClass} onClick={() => this.handleRatingChange(index + 1)}>
              &#9733;
            </span>
          );
        })}
      </div>
    );
  }
}
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { IonIcon } from '@ionic/react';
// import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';

// @Component({
//   tag: 'my-starrating',
//   styleUrl: 'Starrating.css',
//   shadow: true,
// })
// export class StarRating {
//   @Prop() totalStars: number = 5;
//   @Prop() currentRating: number = 3;
//   @Event() ratingChanged:EventEmitter<number>
//   // @Prop() onRatingChange: (newRating: number)=> number;

//   render() {
//     return (
//       <div class="star-rating-style">
//         {Array.from({ length: this.totalStars }, (_, index) => (
//           <ion-icon
//           key={index}
//           // icon={fullStar}
//           name={index < this.currentRating ? 'star' : 'star-outline'}
//           class={index < this.currentRating ? 'star rated' : 'star'}
//           onClick={() => this.ratingChanged.emit(index + 1)} >
//             </ion-icon>
//         ))}
//       </div>
//     );
//   }
// }
