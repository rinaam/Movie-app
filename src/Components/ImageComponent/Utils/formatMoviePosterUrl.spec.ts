import { ImageSizes } from "./../../../Constants";
import { formatMoviePosterUrl } from "./formatMoviePosterUrl";

describe("formatMoviePosterUrl", () => {
  it("should render formatMoviePosterUrl", () => {
    const result = formatMoviePosterUrl({
      size: ImageSizes.s,
      imageUrl: "/fake-image.jpg",
    });

    const expectedResult = "https://image.tmdb.org/t/p/w154/fake-image.jpg";

    expect(result).toEqual(expectedResult);
  });
  it("should render formatMoviePosterUrl with baseUrl", () => {
    const result = formatMoviePosterUrl({
      size: ImageSizes.s,
      imageUrl: "/fake-image.jpg",
      baseUrl: "fake-base-url/",
    });

    const expectedResult = "fake-base-url/w154/fake-image.jpg";

    expect(result).toEqual(expectedResult);
  });
});
