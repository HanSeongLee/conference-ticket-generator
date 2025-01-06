import type { Meta, StoryObj } from '@storybook/react';

import Label from './index';

const meta: Meta<typeof Label> = {
  title: 'Components/typography/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Upload Avatar',
    htmlFor: '',
  },
};
