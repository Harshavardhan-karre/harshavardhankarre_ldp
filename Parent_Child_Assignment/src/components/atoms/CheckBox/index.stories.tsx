import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomCheckBox from "./index.tsx";
import { action } from "@storybook/addon-actions";

export default {
  title: "Components/atoms/Checkbox",
  component: CustomCheckBox,
} as Meta;

type CheckBoxProps = React.ComponentProps<typeof CustomCheckBox>;

const Template: StoryFn<CheckBoxProps> = (args) => <CustomCheckBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: action("Checkbox clicked"),
};

export const Check = Template.bind({});
Check.args = {
  checked: true,
  onChange: action("Checkbox clicked"),
};

export const Modify = Template.bind({});
Modify.args = {
  checked: false,
  onChange: action("Modified this"),
  sx: { color: "white" },
};
