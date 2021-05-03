import { create } from "react-test-renderer";
import DetailsPage from "./DetailsPage";
import React from "react";

describe("DetailsPage", () => {
  it("should render DetailsPage", () => {
    const wrapper = create(<DetailsPage />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
