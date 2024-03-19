import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import './LikeComponent.css'
const LikeComponent = ({ isLiked, onToggleLike }) => {
 return (
    <div className='like-icon'>
<div onClick={onToggleLike}>
<FontAwesomeIcon icon={isLiked ? solidHeart : regularHeart} color={isLiked ? 'red' : 'grey'} />
</div>
</div>
 );
};
export default LikeComponent;