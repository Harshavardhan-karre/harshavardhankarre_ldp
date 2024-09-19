import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import Button from './index.tsx';

export default {
  title: "Components/atoms/Button",
  component: Button,
} as Meta;

type ButtonProps = React.ComponentProps<typeof Button>;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variation:"text",
  text:"Button"
};

export const ButtonClick=Template.bind({});
ButtonClick.args={
   variation:"text",
  text:"Button",
  handleButtonClick:action("button-click"),
}
