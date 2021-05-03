import React from "react";
import { Story, Meta } from "@storybook/react";

import ImageCardComponent, { IImageCardProps } from "./ImageCardComponent";

export default {
  title: "ImageCard",
  component: ImageCardComponent,
} as Meta;

const Template: Story<IImageCardProps> = (args) => (
  <ImageCardComponent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  imageUrl: "https://image.tmdb.org/t/p/w780/hKHZhUbIyUAjcSrqJThFGYIR6kI.jpg",
  alt: "alt",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod harum dolor fuga nihil voluptate corrupti deleniti doloremque ipsa. Placeat nemo laudantium tempora sint aliquam voluptate assumenda delectus voluptas officia dolorum!",
};
