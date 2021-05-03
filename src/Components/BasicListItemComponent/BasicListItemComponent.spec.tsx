import { create } from "react-test-renderer";
import BasicListItemComponent from "./BasicListItemComponent";
import React from "react";

describe("BasicListItemComponent", () => {
  it("should render BasicListItemComponent", () => {
    const wrapper = create(
      <BasicListItemComponent title="title" sufix="item" />
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
