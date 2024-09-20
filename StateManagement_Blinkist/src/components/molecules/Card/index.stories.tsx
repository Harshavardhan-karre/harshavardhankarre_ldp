import React from "react";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn } from "@storybook/react";
import Card from "./index.tsx";
import Img from "../../../../public/logo192.png";
export default {
  title: "Components/Molecules/Card",
  component: Card,
} as Meta;

type CardProps = React.ComponentProps<typeof Card>;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  Src: Img,
  FontSize: 200,
  FontWeight: 500,
  ButtonText: "Button",
};
export const BookContents = Template.bind({});
BookContents.args = {
  Src: Img,
  FontSize: 200,
  FontWeight: 500,
  ButtonText: "Button",
  BookTitle: "New_book Name",
  AuthorTitle: "Write Author Name",
  TimeText: "45Min",
  ReadTexts: "2k Reads",
};

export const CardButton = Template.bind({});
CardButton.args = {
  Src: Img,
  FontSize: 200,
  FontWeight: 500,
  ButtonText: "Button",
  BookTitle: "New_book Name",
  AuthorTitle: "Write Author Name",
  TimeText: "45Min",
  ReadTexts: "2k Reads",
  index: 2,
  currentState: true,
  handleButtonClick: action("button-click"),
};
