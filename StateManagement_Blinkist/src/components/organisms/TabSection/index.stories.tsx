import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import CardSection from "./index.tsx";

export default {
  title: "Components/atoms/CardSection",
  component: CardSection,
} as Meta;

type CardSectionProps = React.ComponentProps<typeof CardSection>;

const Template: StoryFn<CardSectionProps> = (args) => <CardSection />;

export const Default = Template.bind({});
Default.args = {};
