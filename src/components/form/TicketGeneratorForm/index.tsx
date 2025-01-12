import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import FormField from '@/components/form/FormField';
import ImageFileInput from '@/components/form/ImageFileInput';
import Input from '@/components/form/Input';
import Button from '@/components/element/Button';
import Form from '@/components/form/Form';

export interface ITicketGeneratorForm {
    uploadAvatar: FileList;
    fullName: string;
    email: string;
    githubUsername: string;
}

interface ITicketGeneratorFormProps extends FormHTMLAttributes<HTMLFormElement> {

}

const TicketGeneratorForm: React.FC<ITicketGeneratorFormProps> = ({ className, ...props }) => {
    return (
        <Form className={cn(styles.ticketGeneratorForm, className)}
              noValidate
              {...props}
        >
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
                       type={'email'}
                       placeholder={'example@email.com'}
                       options={{
                           required: 'Email address is required.',
                           validate: (value: string) => {
                               const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
                               if (!emailRegex.test(value)) {
                                   return 'Invalid email address.';
                               }
                               return true;
                           },
                       }}
                />
            </FormField>
            <FormField name={'githubUsername'}
                       label={'GitHub Username'}
            >
                <Input id={'githubUsername'}
                       name={'githubUsername'}
                       placeholder={'@yourusername'}
                       options={{
                           required: 'GitHub username is required.',
                           validate: (value: string) => {
                               if (!value.startsWith('@')) {
                                   return 'Username must start with @.';
                               }
                               return true;
                           },
                       }}
                />
            </FormField>
            <Button type={'submit'}>
                Generate My Ticket
            </Button>
        </Form>
    );
};

export default TicketGeneratorForm;
