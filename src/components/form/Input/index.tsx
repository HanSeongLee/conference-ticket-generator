import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import { useFormContext } from 'react-hook-form';
import { RegisterOptions } from 'react-hook-form/dist/types/validator';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    options?: RegisterOptions;
    error?: boolean;
}

const Input: React.FC<IInputProps> = ({
                                          name, options, error = false, className,
                                          ...props
                                      }) => {
    const formContext = useFormContext();
    const hasError = error || formContext?.formState.errors[name];

    return (
        <input className={cn(styles.input, {
            [styles.error]: hasError,
        }, className)}
               {...props}
               {...formContext?.register?.(name, options)}
        />
    );
};

export default Input;
