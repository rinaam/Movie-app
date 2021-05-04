import { ImageSizes, environmentVariables } from "./../../../Constants";

export type TFormatMoviePosterUrl = (args: {
  size: ImageSizes;
  imageUrl: string;
  baseUrl?: string;
}) => string;

export const formatMoviePosterUrl: TFormatMoviePosterUrl = ({
  size,
  imageUrl,
  baseUrl = environmentVariables.baseUrl,
}) => `${baseUrl}${size}${imageUrl}`;
