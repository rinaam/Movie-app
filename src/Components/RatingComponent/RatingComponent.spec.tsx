import { act, create } from "react-test-renderer";
import RatingComponent from "./RatingComponent";
import React from "react";

describe("RatingComponent", () => {
  it("should render RatingComponent", () => {
    const fakeClick = jest.fn();
    const wrapper = create(
      <RatingComponent rating={5} onClick={fakeClick} />
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should handle click", () => {
    const fakeClick = jest.fn();
    const wrapper = create(<RatingComponent rating={5} onClick={fakeClick} />);

    const star3 = wrapper.root.findAllByProps({ className: "rating-icon" })[2];
    act(() => {
      star3.props.onClick();
    });

    expect(fakeClick).toBeCalled();
    expect(fakeClick).toBeCalledWith(3);
  });
});
