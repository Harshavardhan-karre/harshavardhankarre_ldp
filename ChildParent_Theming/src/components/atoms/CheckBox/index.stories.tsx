import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import CustomCheckBox from './index.tsx'; 
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/atoms/CheckBox', 
  component: CustomCheckBox,
} as Meta<typeof CustomCheckBox>;

const Template: StoryFn<typeof CustomCheckBox> = (args) => {
  const [checked, setChecked] = useState(args.checked);

  const handleChange = () => {
    setChecked(!checked);
    args.onChange();
  };

  return <CustomCheckBox checked={checked} onChange={handleChange} />;
};

export const Default = Template.bind({});
Default.args = {
  checked: false,
  onChange: () => action('Checkbox changed'),
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  onChange: () => action('Checkbox changed'),
};
