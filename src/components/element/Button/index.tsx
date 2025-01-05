import React from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<IButtonProps> = ({ type = 'button', className, children, ...props }) => {
    return (
        <button className={cn(styles.button, className)}
                type={type}
                {...props}
        >
            {children}
        </button>
    );
};

export default Button;
