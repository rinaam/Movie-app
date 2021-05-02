import { create } from "react-test-renderer";
import RadioGroupComponent from "./RadioGroupComponent";
import React from "react";

describe("RadioGroupComponent", () => {
  it("should render RadioGroupComponent", () => {
    const fakeChange = jest.fn();
    const fakeItems = [
      {
        name: "option1",
        id: 1,
      },
      {
        name: "option2",
        id: 2,
      },
      {
        name: "option3",
        id: 3,
      },
    ];
    const wrapper = create(
      <RadioGroupComponent
        items={fakeItems}
        groupName="fakeName"
        onChange={fakeChange}
      />
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should trigger on change", () => {
    const fakeChange = jest.fn();
    const fakeItems = [
      {
        name: "option1",
        id: 1,
      },
      {
        name: "option2",
        id: 2,
      },
      {
        name: "option3",
        id: 3,
      },
    ];
    const wrapper = create(
      <RadioGroupComponent
        items={fakeItems}
        groupName="fakeName"
        onChange={fakeChange}
      />
    );
    const option2 = wrapper.root.findByProps({ value: "option2" });

    option2.props.onChange();

    expect(fakeChange).toBeCalled();
  });
});
