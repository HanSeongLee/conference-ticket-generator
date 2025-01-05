import type { Meta, StoryObj } from '@storybook/react';

import Icon, { IconName } from './index';

const meta: Meta<typeof Icon> = {
  title: 'Components/element/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Primary: Story = {
  args: {
    iconName: IconName.CLOUD,
  },
};
