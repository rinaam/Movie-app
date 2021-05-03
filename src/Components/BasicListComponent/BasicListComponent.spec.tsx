import { create } from "react-test-renderer";
import BasicListComponent from "./BasicListComponent";
import React from "react";

describe("BasicListComponent", () => {
  const fakeList = [
    {
      title: "title",
      sufix: "item",
    },
  ];
  it("should render BasicListComponent", () => {
    const wrapper = create(<BasicListComponent list={fakeList} />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
