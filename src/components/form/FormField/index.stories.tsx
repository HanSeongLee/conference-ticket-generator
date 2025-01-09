import type { Meta, StoryObj } from '@storybook/react';

import FormField from './index';
import Input from '@/components/form/Input';

const meta: Meta<typeof FormField> = {
  title: 'Components/form/FormField',
  component: FormField,
  tags: ['autodocs'],
  argTypes: {
    className: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: 'Email Address',
    name: 'email',
    children: (
        <Input id={'email'}
               name={'email'}
               placeholder={'example@email.com'}
        />
    ),
  },
};

export const Info: Story = {
  args: {
    label: 'Email Address',
    name: 'email',
    info: 'Please enter a valid email address.',
    children: (
        <Input id={'email'}
               name={'email'}
               placeholder={'example@email.com'}
        />
    ),
  },
};

export const Error: Story = {
  args: {
    label: 'Email Address',
    name: 'email',
    error: 'Please enter a valid email address.',
    children: (
        <Input id={'email'}
               name={'email'}
               placeholder={'example@email.com'}
               error
        />
    ),
  },
};
