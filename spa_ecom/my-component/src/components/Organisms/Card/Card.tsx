import { Component, h, State } from '@stencil/core';
import './Card.css';
@Component({
    tag: "my-card",
    styleUrl: "Card.css",
    shadow: true,
  })
  export class CustomCard {
    @State() favorites: boolean[] = Array.from({ length: 10 }, () => false);
    @State() ratings: number[] = Array.from({ length: 10 }, () => 0);
   
    toggleFavorite(imageIndex: number) {
      const newFavorites = [...this.favorites];
      newFavorites[imageIndex] = !newFavorites[imageIndex];
      this.favorites = newFavorites;
    }
   
    handleRatingChange(imageIndex: number, newRating: number) {
      const newRatings = [...this.ratings];
      newRatings[imageIndex] = newRating;
      this.ratings = newRatings;
    }
   
    render() {
      const images = Array.from({ length: 10 }, (value, index) => ({
        id: index + 1,
        src: `https://www.shutterstock.com/image-vector/3d-shopping-cart-cloud-online-260nw-2143411437.jpg`,
        alt: `Product ${index + 1}`,
      }));
   
      return (
        <div class="homepage-cards">
          {images.map((image, index) => (
          <div key={image.id} class="card">
              <img src={image.src} alt={image.alt} class="card-image" />
              {/* <my-likecomponent isliked={this.favorites[index]} 
              onTogglelike={() => this.toggleFavorite(index)}></my-likecomponent> */}
              <my-likecomponent class="heart-icon"></my-likecomponent>
              <div class="card-info">
                <h2 class="card-name">Product {image.id}</h2>
                <span class="card-price">$9999</span>
              </div>
              {/* <my-star-rating currentRating={this.ratings[index]} 
              onRatingChange={(newRating) => this.handleRatingChange(index, newRating)}>
              </my-star-rating> */}
              <my-starrating onRatingChanged={(newRating) => 
                console.log(newRating)}></my-starrating>
              <my-button></my-button>
            </div>
          ))}
        </div>
      );
    }
  }