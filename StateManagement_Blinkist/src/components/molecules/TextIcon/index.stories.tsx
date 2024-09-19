import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import TextIcon from "./index.tsx";
import Img from '../../../../public/logo192.png'
export default {
  title: "Components/Molecules/TextIcon",
  component: TextIcon,
} as Meta;

type TextIconProps = React.ComponentProps<typeof TextIcon>;

const Template: StoryFn<TextIconProps> = (args) => <TextIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  src:Img
};
