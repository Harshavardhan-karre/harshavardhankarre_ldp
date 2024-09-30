// const Template: StoryFn<IconProps> = (args)=> <Icon {...args}/>;

// export const Default=Template.bind({});

import React from "react";
import action from "@storybook/addon-essentials";
import { Meta, StoryFn } from "@storybook/react";
import Icon from "./index.tsx";

export default {
  title: "Components/atoms/Icon",
  component: Icon,
} as Meta;

type IconProps = React.ComponentProps<typeof Icon>;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  label: "This is an icon",
};

export const Size=Template.bind({});

Size.args={
  fontSize:"medium"
}


export const color=Template.bind({});

color.args={
  color:"inherit",
}

