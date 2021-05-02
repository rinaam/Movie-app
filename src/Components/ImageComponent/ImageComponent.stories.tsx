import React from "react";
import { Story, Meta } from "@storybook/react";

import ImageComponent, { IImageProps } from "./ImageComponent";

export default {
  title: "Image",
  component: ImageComponent,
} as Meta;

const Template: Story<IImageProps> = (args) => <ImageComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgUrl: `https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`,
  alt: "image",
};
