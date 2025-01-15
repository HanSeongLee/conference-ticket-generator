import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

interface IWallpaperProps extends HTMLAttributes<HTMLDivElement> {

}

const Wallpaper: React.FC<IWallpaperProps> = ({ className, children, ...props }) => {
    return (
        <div className={cn(styles.wallpaper, className)}
             {...props}
        >
            {children}
        </div>
    );
};

export default Wallpaper;
