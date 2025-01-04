import type { Meta, StoryObj } from '@storybook/react';

import Header from './index';

const meta: Meta<typeof Header> = {
  title: 'Components/layout/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
};
