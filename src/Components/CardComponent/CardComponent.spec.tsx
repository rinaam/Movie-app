import { create } from "react-test-renderer";
import CardComponent from "./CardComponent";
import React from "react";

describe("CardComponent", () => {
  it("should render CardComponent", () => {
    const wrapper = create(
      <CardComponent
        grade={5}
        imgUrl="image"
        title="Movie Title"
        content="Language: en"
        titleSufix="2018"
        onClick={jest.fn}
      />
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
