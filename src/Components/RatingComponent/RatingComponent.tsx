import React, { useState } from "react";
import "./RatingComponent.scss";
import SolidStar from "../../Assets/Icons/SolidStarIcon.svg";
import RegularStar from "../../Assets/Icons/RegularStarIcon.svg";
import { RATING_GRADES } from "../../Constants";

export interface IRatingProps {
  rating: number;
  onClick: (event: number) => void;
}

const RatingComponent: React.FC<IRatingProps> = ({ rating, onClick }) => {
  const [selectedGrade, setSelectedGrade] = useState(rating);

  const handleClick = (grade: number) => {
    setSelectedGrade(grade);
    onClick(grade);
  };

  return (
    <div className="rating">
      {RATING_GRADES.map((grade) => {
        const StarIcon = grade <= selectedGrade ? SolidStar : RegularStar;
        return (
          <div
            onClick={() => handleClick(grade)}
            className="rating-icon"
            key={grade}
          >
            <StarIcon />
          </div>
        );
      })}
    </div>
  );
};

export default RatingComponent;
