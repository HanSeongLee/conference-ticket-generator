import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import LogoSvg from '@/assets/logo.svg';
import Link from 'next/link';

interface ILogoProps extends HTMLAttributes<HTMLDivElement> {

}

const Logo: React.FC<ILogoProps> = ({ className, ...props }) => {
    return (
        <div className={cn(styles.logo, className)}
             {...props}
        >
            <Link href={'/'}
                  aria-label={'Conference Ticket Generator'}
            >
                <LogoSvg />
            </Link>
        </div>
    );
};

export default Logo;
