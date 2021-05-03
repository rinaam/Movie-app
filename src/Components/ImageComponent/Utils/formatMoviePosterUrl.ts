import { ImageSizes } from "./../../../Constants";

export type TFormatMoviePosterUrl = (args: {
  size: ImageSizes;
  imageUrl: string;
  baseUrl?: string;
}) => string;

export const formatMoviePosterUrl: TFormatMoviePosterUrl = ({
  size,
  imageUrl,
  baseUrl = "https://image.tmdb.org/t/p/",
}) => `${baseUrl}${size}${imageUrl}`;
