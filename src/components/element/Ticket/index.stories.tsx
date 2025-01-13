import type { Meta, StoryObj } from '@storybook/react';

import Ticket from './index';

const meta: Meta<typeof Ticket> = {
  title: 'Components/element/Ticket',
  component: Ticket,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Ticket>;

export const Default: Story = {
  args: {
    title: 'Coding Conf',
    location: 'Jan 31, 2025 / Austin, TX',
    avatar: '/imgs/avatar.png',
    fullName: 'Jonatan Kristof',
    githubUsername: 'jonatankristof0101',
    ticketNumber: '01609',
  },
};
