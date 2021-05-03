import React from "react";
import { Story, Meta } from "@storybook/react";

import RatingComponent, { IRatingProps } from "./RatingComponent";

export default {
  title: "Rating",
  component: RatingComponent,
} as Meta;

const Template: Story<IRatingProps> = (args) => <RatingComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  rating: 5.2,
};
