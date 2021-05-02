import React from "react";
import "./CardComponent.scss";

import ImageComponent from "../ImageComponent/ImageComponent";

export interface ICardProps {
  grade: number;
  imgUrl: string;
  title: string;
  content: string;
  titleSufix: string | number;
  onClick: () => void;
}

const CardComponent: React.FC<ICardProps> = ({
  grade,
  imgUrl,
  title,
  content,
  titleSufix,
  onClick,
}) => (
  <div className="card" onClick={onClick}>
    <div className="card-header">
      <ImageComponent
        alt={title}
        imgUrl={imgUrl}
        useBackground
        className="card-header-image"
      />

      <p className="card-header-grade">{grade}</p>
    </div>
    <div className="card-data">
      <div className="card-data-title">
        <p>{title}</p>
        <p>({titleSufix})</p>
      </div>

      <p> {content}</p>
    </div>
  </div>
);

export default CardComponent;
