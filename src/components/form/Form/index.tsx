import React, { FormHTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {

}

const Form: React.FC<IFormProps> = ({ onSubmit, children, className, ...props }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit?.(e);
    };

    return (
        <form className={cn(styles.form, className)}
              {...props}
              onSubmit={handleSubmit}
        >
            {children}
        </form>
    );
};

export default Form;
