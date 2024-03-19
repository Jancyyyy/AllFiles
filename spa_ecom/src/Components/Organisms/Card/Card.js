import React, { useState } from "react";
import "./Card.css";
import Layout from "../../Molecules/Layout/Layout";
import Button from "../../atoms/Button";
import StarRating from "../../atoms/StarRating/StarRating";
import LikeComponent from "../../atoms/Likes/LikeComponent";
// Assuming you have a list of images or items as before
const images = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  src: `https://www.shutterstock.com/image-vector/3d-shopping-cart-cloud-online-260nw-2143411437.jpg`,
  alt: `Product ${index + 1}`,
}));
const Card = () => {
  const [favorites, setFavorites] = useState(Array(images.length).fill(false));
  const [ratings, setRatings] = useState(Array(images.length).fill(0));
  const toggleFavorite = (imageIndex) => {
    const newFavorites = [...favorites];
    newFavorites[imageIndex] = !newFavorites[imageIndex];
    setFavorites(newFavorites);
  };
  const handleRatingChange = (imageIndex, newRating) => {
    const newRatings = [...ratings];
    newRatings[imageIndex] = newRating;
    setRatings(newRatings);
  };
  return (
    // <Layout>
      <div className="homepage-cards">
        {images.map((image, index) => (
          <div key={image.id} className="card">
            <img src={image.src} alt={image.alt} className="card-image" />
            <LikeComponent
              isLiked={favorites[index]}
              onToggleLike={() => toggleFavorite(index)}
            />
            <div className="card-info">
              <h2 className="card-name">Product {image.id}</h2>
              <span className="card-price">$9999</span>
            </div>
            <div className="card-rating">
              <StarRating
                currentRating={ratings[index]}
                onRatingChange={(newRating) =>
                  handleRatingChange(index, newRating)
                }
              />
            </div>
            <Button>Add to Cart</Button>
          </div>
        ))}
      </div>
    // </Layout>
  );
};
export default Card;
//             <button className="add-to-cart-btn">Add to Cart</button>
