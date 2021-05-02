import React from "react";
import { Story, Meta } from "@storybook/react";

import ModalComponent, { IModalProps } from "./ModalComponent";

export default {
  title: "Modal",
  component: ModalComponent,
} as Meta;

const Template: Story<IModalProps> = (args) => <ModalComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Movie Roulette",
  open: true,
  children: (
    <div>
      <p>test</p>
      <p>llllll</p>
    </div>
  ),
};
