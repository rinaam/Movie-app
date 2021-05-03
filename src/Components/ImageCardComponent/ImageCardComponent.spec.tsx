import { create } from "react-test-renderer";
import ImageCardComponent from "./ImageCardComponent";
import React from "react";

describe("ImageCardComponent", () => {
  it("should render ImageCardComponent", () => {
    const wrapper = create(
      <ImageCardComponent description="test" imageUrl="test" alt="test" />
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
