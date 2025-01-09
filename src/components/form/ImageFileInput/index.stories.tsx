import type { Meta, StoryObj } from '@storybook/react';

import ImageFileInput from './index';

const meta: Meta<typeof ImageFileInput> = {
  title: 'Components/form/ImageFileInput',
  component: ImageFileInput,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof ImageFileInput>;

export const Default: Story = {
  args: {
    accept: '.jpg, .jpeg, .png',
  },
};
