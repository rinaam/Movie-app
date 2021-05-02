import React from "react";
import { Story, Meta } from "@storybook/react";

import CardComponent, { ICardProps } from "./CardComponent";

export default {
  title: "Card",
  component: CardComponent,
} as Meta;

const Template: Story<ICardProps> = (args) => <CardComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  grade: 5,
  imgUrl: `https://image.tmdb.org/t/p/w342/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`,
  title: "Movie Title Movie Title Movie Title",
  content: "Language: en",
  titleSufix: "2018",
};
