import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import './StarRating.css';
const StarRating = ({ totalStars = 5, currentRating = 0, onRatingChange }) => {
    return (
   <div className="star-rating">
        {Array.from({ length: totalStars }, (_, index) => (
   <FontAwesomeIcon
            key={index}
            icon={fullStar}
            className={index < currentRating ? 'star rated' : 'star'}
            onClick={() => onRatingChange(index + 1)}
          />
        ))}
   </div>
    );
   };
   export default StarRating;