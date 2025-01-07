import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  title: 'Components/form/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Placeholder',
    error: true,
  },
};
