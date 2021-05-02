import { ImageSizes } from "./../../../Constants";
import { formatMoviePosterUrl } from "./formatMoviePosterUrl";

describe("formatMoviePosterUrl", () => {
  it("should render formatMoviePosterUrl", () => {
    const result = formatMoviePosterUrl({
      size: ImageSizes.s,
      imageUrl: "/fake-image.jpg",
    });

    const expectedResult = "fake-base/w154/fake-image.jpg";

    expect(result).toEqual(expectedResult);
  });
  it("should render formatMoviePosterUrl", () => {
    const result = formatMoviePosterUrl({
      size: ImageSizes.s,
      imageUrl: "/fake-image.jpg",
      baseUrl: "fake-base-url/",
    });

    const expectedResult = "fake-base-url/w154/fake-image.jpg";

    expect(result).toEqual(expectedResult);
  });
});
