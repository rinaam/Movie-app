import React from "react";
import { Story, Meta } from "@storybook/react";

import BasicListItemComponent, {
  IBasicListItemProps,
} from "../BasicListItemComponent/BasicListItemComponent";

export default {
  title: "BasicListItem",
  component: BasicListItemComponent,
} as Meta;

const Template: Story<IBasicListItemProps> = (args) => (
  <BasicListItemComponent {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "title",
  sufix: "item",
};
