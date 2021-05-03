import React from "react";
import "./ImageCardComponent.scss";
import ImageComponet from "../ImageComponent/ImageComponent";

export interface IImageCardProps {
  imageUrl: string;
  description: string;
  alt: string;
}

const ImageCardComponent: React.FC<IImageCardProps> = ({
  imageUrl,
  description,
  alt,
}) => (
  <div className="image-card">
    <ImageComponet
      imgUrl={imageUrl}
      alt={alt}
      className="image-card-img"
      useBackground
    />

    <p className="image-card-description">{description}</p>
  </div>
);
export default ImageCardComponent;
