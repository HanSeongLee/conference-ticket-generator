import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import LogoSvg from '@/assets/logo.svg';
import Link from 'next/link';

interface ILogoProps extends HTMLAttributes<HTMLDivElement> {

}

const Logo: React.FC<ILogoProps> = ({ ...props }) => {
    return (
        <div className={styles.logo}
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
