import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import Header from "./index.tsx";

export default {
  title: "Components/Molecules/Header",
  component: Header,
} as Meta;

type HeaderProps = React.ComponentProps<typeof Header>;

const Template: StoryFn<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
   tab1:"Tab 1",
   tab2:"Tab 2"
};


export const HeaderTabSelect = Template.bind({});
HeaderTabSelect.args = {
   tab1:"Tab 1",
   tab2:"Tab 2",
   handleTab:action("Tab is clicked")
};
