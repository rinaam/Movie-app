import React from "react";

export interface IImageProps {
  imgUrl: string;
  alt: string;
  useBackground?: boolean;
  className?: string;
}

const ImageComponent: React.FC<IImageProps> = ({
  imgUrl,
  alt,
  useBackground = false,
  className = "",
}) =>
  useBackground ? (
    <div
      className={className}
      style={{
        backgroundImage: `url("${imgUrl}")`,
      }}
    />
  ) : (
    <img className={className} src={imgUrl} alt={alt} />
  );

export default ImageComponent;
