import { getReleaseDate } from "./getReleaseDate";

describe("getReleaseDate", () => {
  it("should correctly return date if no release date or first air date present", () => {
    const result = getReleaseDate();
    expect(result).toEqual("Unknown Date");
  });

  it("should correctly return date if first_air_date exists", () => {
    const result = getReleaseDate("2010-01-01");
    expect(result).toEqual(2010);
  });
});
