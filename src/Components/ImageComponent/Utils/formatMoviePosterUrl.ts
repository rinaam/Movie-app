import { ImageSizes } from "./../../../Constants";

export type TFormatMoviePosterUrl = (args: {
  size: ImageSizes;
  imageUrl: string;
  baseUrl?: string;
}) => string;

export const formatMoviePosterUrl: TFormatMoviePosterUrl = ({
  size,
  imageUrl,
  baseUrl = process.env.BASE_IMAGE_URL,
}) => `${baseUrl}${size}${imageUrl}`;
