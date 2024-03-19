import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
function GrideSomething() {
    const [isLiked, setIsLiked] = useState();
    const handleLikeClick = () => {
        setIsLiked((prev) => !prev);
    };
    return (
        <div>
            {isLiked ? (
                <AiFillHeart
                    data-testid="like-icon"
                    className="love-icon"
                    color="red"
                    size={50}
                    onClick={handleLikeClick}
                />
            ) : (
                <AiOutlineHeart
                    data-testid="like-icon"
                    className="love-icon"
                    size={50}
                    onClick={handleLikeClick}
                />
            )}
        </div>
    );
}
export default GrideSomething;