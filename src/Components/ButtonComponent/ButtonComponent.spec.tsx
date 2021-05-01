import { act, create } from 'react-test-renderer';
import React from 'react';
import ButtonComponent from './ButtonComponent';

describe('ButtonComponent', () => {
  it('should render ButtonComponent', () => {
    const fakeClick = jest.fn();
    const wrapper = create(
      <ButtonComponent variant="primary" onClick={fakeClick}>Roll</ButtonComponent>,
    ).toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('should trigger click', () => {
    const fakeClick = jest.fn();
    const wrapper = create(
      <ButtonComponent variant="primary" onClick={fakeClick}>Roll</ButtonComponent>,
    );

    act(() => {
      wrapper.root.props.onClick();
    });

    expect(fakeClick).toBeCalled();
  });
});
