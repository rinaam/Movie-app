import React from "react";

export interface IImageProps {
  imgUrl: string;
  alt: string;
}

const ImageComponent: React.FC<IImageProps> = ({ imgUrl, alt }) => (
  <img src={imgUrl} alt={alt} />
);

export default ImageComponent;
