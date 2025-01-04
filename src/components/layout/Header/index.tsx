import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import Logo from '@/components/brand/Logo';

interface IHeaderProps extends HTMLAttributes<HTMLDivElement> {

}

const Header: React.FC<IHeaderProps> = ({ className, ...props }) => {
    return (
        <header className={cn(styles.header, className)}
             {...props}
        >
            <Logo />
        </header>
    );
};

export default Header;
