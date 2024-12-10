import React from "react";
import { BiStar } from "react-icons/bi";
import { BsStarFill, BsStarHalf } from "react-icons/bs";

type RatingProps = {
  rating: Number; // Rating value between 0 and 5
};

const Rating: React.FC<RatingProps> = ({ rating }) => {
  // Ensure rating is within the valid range
  const normalizedRating = Math.min(Math.max(rating, 0), 5);

  // Generate stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (normalizedRating >= starValue) {
      // Full star
      return <BsStarFill key={index} className="text-yellow-400" />;
    } else if (normalizedRating > starValue - 1) {
      // Half star
      return <BsStarHalf key={index} className="text-yellow-400" />;
    } else {
      // Empty star
      return <BiStar key={index} className="text-gray-500" />;
    }
  });

  return (
    <div className="stars flex gap-1 items-center">
      {stars}
      <span className="ml-2 text-gray-700 font-medium">
        {rating.toFixed(1)}
      </span>
    </div>
  );
};

export default Rating;
