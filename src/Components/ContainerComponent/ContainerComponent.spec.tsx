import { create } from "react-test-renderer";
import ContainerComponent from "./ContainerComponent";
import React from "react";

describe("ContainerComponent", () => {
  it("should render ContainerComponent", () => {
    const wrapper = create(
      <ContainerComponent>Hello World</ContainerComponent>
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
