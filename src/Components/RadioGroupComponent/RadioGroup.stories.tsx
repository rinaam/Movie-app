import React from "react";
import { Story, Meta } from "@storybook/react";

import RadioGroupComponent, { IRadioGroupProps } from "./RadioGroupComponent";

export default {
  title: "RadioButton",
  component: RadioGroupComponent,
} as Meta;

const Template: Story<IRadioGroupProps> = (args) => (
  <RadioGroupComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  items: [
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
  ],
  groupName: "fake",
  title: "Select:",
  onChange: () => {
    // do nothing
  },
};
