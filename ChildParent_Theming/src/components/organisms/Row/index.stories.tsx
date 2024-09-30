import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from './index.tsx';

export default {
  title: 'Components/Organisms', 
  component: Table,
} as Meta<typeof Table>;

const Template: StoryFn<typeof Table> = () => <Table />;

export const Default = Template.bind({});
Default.args = {};
