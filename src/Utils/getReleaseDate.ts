export const getReleaseDate = (releaseDate?: string): number | string => {
  if (!releaseDate) {
    return "Unknown Date";
  }
  return new Date(`${releaseDate}`).getFullYear();
};
