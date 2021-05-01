import React from "react";
import { Story, Meta } from "@storybook/react";

import ButtonComponent, {
  IButtonProps,
} from "./ButtonComponent";
import RandomIcon from '../../Assets/Icons/RandomIcon.svg';
import CloseIcon from '../../Assets/Icons/CloseIcon.svg';

export default {
  title: "Button",
  component: ButtonComponent,
} as Meta;

const Template: Story<IButtonProps> = (args) => <ButtonComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  children: "Roll",
};

export const Round = Template.bind({});
Round.args = {
  variant: "round",
  children: "Load",
};

export const Floating = Template.bind({});
Floating.args = {
  variant: "floating",
  children: <RandomIcon />,
};

export const Close = Template.bind({});
Close.args = {
  variant: "close",
  children: <CloseIcon />,
};
