import React from "react";
import { create } from "react-test-renderer";
import ImageComponent from "./ImageComponent";

describe("ImageComponent", () => {
  it("should render ImageComponent", () => {
    const wrapper = create(<ImageComponent imgUrl="fakeUrl" alt="fakeAlt" />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it("should render ImageComponent with a background", () => {
    const wrapper = create(
      <ImageComponent imgUrl="fakeUrl" alt="fakeAlt" useBackground />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  it("should accept classname", () => {
    const wrapper = create(
      <ImageComponent
        imgUrl="fakeUrl"
        alt="fakeAlt"
        useBackground
        className="fakeClassname"
      />
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
