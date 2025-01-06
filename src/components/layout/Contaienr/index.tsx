import React from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IContainerProps extends React.HTMLAttributes<HTMLDivElement> {

}

const Container: React.FC<IContainerProps> = ({ children, className, ...props }) => {
    return (
        <div className={cn(styles.container, className)}
             {...props}
        >
            {children}
        </div>
    );
};

export default Container;
