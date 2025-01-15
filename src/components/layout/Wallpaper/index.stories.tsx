import type { Meta, StoryObj } from '@storybook/react';

import Wallpaper from './index';

const meta: Meta<typeof Wallpaper> = {
  title: 'Components/layout/Wallpaper',
  component: Wallpaper,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Wallpaper>;

export const Default: Story = {
  args: {},
};
