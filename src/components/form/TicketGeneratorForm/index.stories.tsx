import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import TicketGeneratorForm from './index';
import { FormProvider, useForm } from 'react-hook-form';

const meta: Meta<typeof TicketGeneratorForm> = {
    title: 'Components/form/TicketGeneratorForm',
    component: TicketGeneratorForm,
    tags: ['autodocs'],
    argTypes: {
        className: { control: 'text' },
    },
    decorators: [
        (Story, context) => {
            const methods = useForm();
            const onSubmit = (data: any) => console.log(data);
            return (
                <FormProvider {...methods}>
                    <Story args={{
                        ...context.args,
                        onSubmit: methods.handleSubmit(onSubmit),
                    }} />
                </FormProvider>
            );
        },
    ],
};

export default meta;
type Story = StoryObj<typeof TicketGeneratorForm>;

export const Default: Story = {
    args: {},
};
