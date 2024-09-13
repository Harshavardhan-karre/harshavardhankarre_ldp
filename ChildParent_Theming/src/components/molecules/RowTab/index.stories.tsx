

import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Row from './index.tsx'; 
import { theme } from '../../../themes/index.tsx';

export default {
  title: 'Components/Molecules/Row', 
  component: Row,
} as Meta<typeof Row>;

const Template: StoryFn<typeof Row> = (args) => {
  return (
    <Row
      {...args}
    />
  );
};


export const Default = Template.bind({});
Default.args = {
  array: ['Header 1', 'Header 2', 'Header 3'],
  index: 0,
  state: false,
  isChecked: false,
};

export const CheckedRow = Template.bind({});
CheckedRow.args = {
  array: ['Cell 1', 'Cell 2', 'Cell 3'],
  index: 1,
  state: false,
  isChecked: true,
};

export const HighlightedRow = Template.bind({});
HighlightedRow.args = {
  array: ['Highlighted 1', 'Highlighted 2', 'Highlighted 3'],
  index: 1,
  state: true,
  isChecked: false,
};

export const CustomTheme = Template.bind({});
CustomTheme.args = {
  array: ['Custom Theme 1', 'Custom Theme 2', 'Custom Theme 3'],
  index: 0,
  state: false,
  isChecked: false,
};
