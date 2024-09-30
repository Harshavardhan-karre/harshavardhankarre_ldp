import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./index.tsx";
import CheckBox from './index.tsx';

export default {
  title: "Components/atoms/CheckBox",
  component: CheckBox,
} as Meta;

type CheckBoxProps = React.ComponentProps<typeof CheckBox>;

const Template: StoryFn<CheckBoxProps> = (args) => <CheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: action('Checkbox changed'),
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: action('Checkbox changed'),
};
