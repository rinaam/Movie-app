import { act, create } from "react-test-renderer";
import HomePage from "./HomePage";
import React from "react";
import ButtonComponent from "../../Components/ButtonComponent/ButtonComponent";
import ModalComponent from "../../Components/ModalComponent/ModalComponent";

describe("HomePage", () => {
  it("should render HomePage", () => {
    const wrapper = create(<HomePage />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it("should open modal", () => {
    const wrapper = create(<HomePage />);
    const openModalButton = wrapper.root.findAllByType(ButtonComponent)[1];

    act(() => {
      openModalButton.props.onClick();
    });

    const modalComponent = wrapper.root.findByType(ModalComponent);
    expect(modalComponent.props.open).toEqual(true);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("should handle close modal", () => {
    const wrapper = create(<HomePage />);
    const openModalButton = wrapper.root.findAllByType(ButtonComponent)[1];

    act(() => {
      openModalButton.props.onClick();
    });

    const modalComponent = wrapper.root.findByType(ModalComponent);
    expect(modalComponent.props.open).toEqual(true);

    act(() => {
      modalComponent.props.onClose();
    });

    expect(modalComponent.props.open).toEqual(false);
  });
});
