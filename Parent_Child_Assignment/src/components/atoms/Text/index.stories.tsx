import React from "react";
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
  label: "This is Text",
};

export const FontSize = Template.bind({});
FontSize.args = {
  size: "30px",
  text: "Hello",
};
