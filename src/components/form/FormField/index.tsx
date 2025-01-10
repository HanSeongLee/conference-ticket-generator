import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import Label from '@/components/typography/Label';
import Icon, { IconName } from '@/components/element/Icon';
import { useFormContext } from 'react-hook-form';

interface IFormFieldProps extends HTMLAttributes<HTMLDivElement> {
    label?: string;
    name: string;
    info?: string;
    error?: string;
}

const FormField: React.FC<IFormFieldProps> = ({
                                                  label, name, info, error,
                                                  className, children, ...props
                                              }) => {
    const formContext = useFormContext();

    const hasError = error || formContext?.formState.errors[name];
    const errorMessage = error || formContext?.formState.errors[name]?.message as string;

    return (
        <div className={cn(styles.formField, className)}
             {...props}
        >
            {label && <Label htmlFor={name}>{label}</Label>}
            {children}
            {!hasError && info && (
                <p className={styles.info}>
                    <Icon iconName={IconName.ERROR}
                          size={16}
                    />
                    <span className={styles.text}>
                        {info}
                    </span>
                </p>
            )}
            {hasError && (
                <p className={styles.error}>
                    <Icon iconName={IconName.ERROR}
                          size={16}
                    />
                    <span className={styles.text}>
                        {errorMessage}
                    </span>
                </p>
            )}
        </div>
    );
};

export default FormField;
