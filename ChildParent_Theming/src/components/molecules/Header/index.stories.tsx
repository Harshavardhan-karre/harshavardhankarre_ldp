import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Header from "./index.tsx";

export default{
    title:"Components/Molecules/Header",
    Component:Header,
} as Meta;


type HeaderProps=React.ComponentProps<typeof Header>;

const Template:StoryFn<HeaderProps> = (args)=> <Header {...args}/>;

export const Default=Template.bind({});

Default.args={
  text:"Your Contracts",
}

export const Text=Template.bind({});

Text.args={
  text:"Your Contracts",
  size:30,
}
