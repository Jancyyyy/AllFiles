
import React, { useState } from 'react';
import './Card.css'; // Import the CSS file here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart, faStar } from '@fortawesome/free-solid-svg-icons';
const Card = ({ imageUrl, productName, price, initialRating }) => {
 const [isFavorite, setIsFavorite] = useState(false);
 const [rating, setRating] = useState(initialRating || 0);
 const toggleFavorite = () => {
  setIsFavorite(!isFavorite);
};
const handleStarClick = (clickedIndex) => {
  setRating(clickedIndex + 1);
};
const stars = Array(5).fill(0);
 return (
<div className="card-container">
<div className="heart-icon" onClick={toggleFavorite}>
<FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} color={isFavorite ? 'red' : 'black'} />
</div>
<img src={imageUrl} alt={productName} className="card-image" />
<div className="card-info">
<h2 className="card-name">{productName}</h2> 
<span className="card-price">{price}</span>
</div>
<div className="card-rating">
{stars.map((_, index) => (
  <FontAwesomeIcon
    key={index}
    icon={faStar}
    color={index < rating ? 'yellow' : 'grey'}
    onClick={() => handleStarClick(index)}
  />
))}
</div>
<button className="add-to-cart-btn">Add to Cart</button>
</div>
 );
};
export default Card;



// import React, { useState } from 'react';
// import './Card.css'; // Import the CSS file here
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
// import { faHeart as fasHeart, faStar } from '@fortawesome/free-solid-svg-icons';
// const Card = ({ imageUrl, productName, price, rating }) => {
//  const [isFavorite, setIsFavorite] = useState(false);
//  const toggleFavorite = () => setIsFavorite(!isFavorite);
//  const stars = Array(5).fill(0);
//  return (
// <div className="card-container">
// <div className="heart-icon" onClick={toggleFavorite}>
// <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} color={isFavorite ? 'red' : 'black'} />
// </div>
// <img src={imageUrl} alt={productName} className="card-image" />
// <div className="card-info">
// <h2 className="card-name">{productName}</h2>
// <span className="card-price">{price}</span>
// </div>
// <div className="card-rating">
//        {stars.map((_, index) => (
// <FontAwesomeIcon key={index} icon={faStar} color={index < rating ? 'yellow' : 'grey'} />))}
// </div>
// <button className="add-to-cart-btn">Add to Cart</button>
// </div>
//  );
// };
// export default Card;
