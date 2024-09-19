import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./index.tsx";
import Img from '../../../../public/logo192.png'
export default {
  title: "Components/atoms/Icon",
  component: Icon,
} as Meta;

type IconProps = React.ComponentProps<typeof Icon>;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  src:Img,
  width:20,
  height:20
};

