import { create } from "react-test-renderer";
import ModalComponent from "./ModalComponent";
import React from "react";

describe("ModalComponent", () => {
  it("should render ModalComponent", () => {
    const fakeChildren = <p>Hello World</p>;
    const wrapper = create(
      <ModalComponent open title="Fake Title" onClose={jest.fn()}>
        {fakeChildren}
      </ModalComponent>
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
