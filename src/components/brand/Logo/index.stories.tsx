import type { Meta, StoryObj } from '@storybook/react';

import Logo from './index';

const meta: Meta<typeof Logo> = {
  title: 'Components/brand/Logo',
  component: Logo,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
  args: {},
};
