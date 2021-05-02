import React from "react";
import { Story, Meta } from "@storybook/react";

import ImageComponent, { IImageProps } from "./ImageComponent";
import { ImageSizes } from "../../Constants";

export default {
  title: "Image",
  component: ImageComponent,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: [
          ImageSizes.xs,
          ImageSizes.s,
          ImageSizes.m,
          ImageSizes.l,
          ImageSizes.xl,
          ImageSizes.xxl,
          ImageSizes.xxl,
          ImageSizes.original,
        ],
      },
    },
  },
} as Meta;

const Template: Story<IImageProps> = (args) => <ImageComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgUrl: `https://image.tmdb.org/t/p/w185/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`,
  alt: "image",
};

const TemplateSizes: Story<{ size: ImageSizes }> = (args) => {
  return (
    <ImageComponent
      imgUrl={`https://image.tmdb.org/t/p/${args.size}/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg`}
      alt="image"
    />
  );
};

export const CustomSizes = TemplateSizes.bind({});
CustomSizes.args = {
  size: ImageSizes.l,
};
