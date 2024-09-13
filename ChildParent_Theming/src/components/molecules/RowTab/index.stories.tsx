

import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Index from './index.tsx'; 
import { theme } from '../../../themes/index.tsx';

export default {
  title: 'Components/Molecules/Row', 
  component: Index,
  parameters: {

    layout: 'centered',
  },
} as Meta<typeof Index>;

const Template: StoryFn<typeof Index> = (args) => {
  const [checkedState, setCheckedState] = useState<boolean[]>(Array(args.array.length).fill(false));

  const handleCheckboxChange = (index: number, isChecked: boolean) => {
    const newCheckedState = [...checkedState];
    newCheckedState[index] = isChecked;
    setCheckedState(newCheckedState);
  };

  return (
    <Index
      {...args}
      state={args.state}
      isChecked={checkedState[args.index]}
      onCheckboxChange={handleCheckboxChange}
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
