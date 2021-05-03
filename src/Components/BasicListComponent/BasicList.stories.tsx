import React from "react";
import { Story, Meta } from "@storybook/react";

import BasicListComponent, { IBasicListProps } from "./BasicListComponent";

export default {
  title: "BasicList",
  component: BasicListComponent,
} as Meta;

const Template: Story<IBasicListProps> = (args) => (
  <BasicListComponent {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  list: [
    {
      title: "title1",
      sufix: "item1",
    },
    {
      title: "title2",
      sufix: "item2",
    },
    {
      title: "title3",
      sufix: "item3",
    },
  ],
};
