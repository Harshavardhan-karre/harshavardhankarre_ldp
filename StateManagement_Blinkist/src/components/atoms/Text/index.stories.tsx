import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import Text from "./index.tsx";

export default {
  title: "Components/atoms/Text",
  component: Text,
} as Meta;

type TextProps = React.ComponentProps<typeof Text>;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Enter Text",
  fontSize: 20,
};

export const TextWeight = Template.bind({});
TextWeight.args = {
  children: "Enter Text",
  fontSize: 20,
  fontWeight: 500,
};
