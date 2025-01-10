import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Form from './index';
import Input from '@/components/form/Input';
import FormField from '@/components/form/FormField';
import Button from '@/components/element/Button';
import ImageFileInput from '@/components/form/ImageFileInput';
import { FormProvider, useForm } from 'react-hook-form';

const meta: Meta<typeof Form> = {
    title: 'Components/form/Form',
    component: Form,
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
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  args: {
      children: (
          <>
              <FormField name={'uploadAvatar'}
                         label={'Upload Avatar'}
                         info={'Upload your photo (JPG or PNG, max size: 500KB).'}
              >
                  <ImageFileInput id={'uploadAvatar'}
                                  name={'uploadAvatar'}
                                  accept={'.jpg, .jpeg, .png'}
                                  options={{
                                      required: 'Avatar is required.',
                                      validate: (files: FileList) => {
                                          const maxFileSize = 500000; // 500kb
                                          if (files[0].size > maxFileSize) {
                                              return 'File too large. Please upload a photo under 500KB.';
                                          }
                                          return true;
                                      },
                                  }}
                  />
              </FormField>
              <FormField name={'fullName'}
                         label={'Full Name'}
              >
                  <Input id={'fullName'}
                         name={'fullName'}
                         options={{
                             required: 'Full name is required.',
                         }}
                  />
              </FormField>
              <FormField name={'email'}
                         label={'Email Address'}
              >
                  <Input id={'email'}
                         name={'email'}
                         placeholder={'example@email.com'}
                         options={{
                             required: 'Email address is required.',
                         }}
                  />
              </FormField>
              <FormField name={'githubUserName'}
                         label={'GitHub Username'}
              >
                  <Input id={'githubUserName'}
                         name={'githubUserName'}
                         placeholder={'@yourusername'}
                         options={{
                             required: 'GitHub username is required.',
                         }}
                  />
              </FormField>
              <Button type={'submit'}>
                  Generate My Ticket
              </Button>
          </>
      ),
  },
};
