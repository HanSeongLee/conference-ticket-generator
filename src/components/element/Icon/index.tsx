import React, { HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import CloudIcon from '@/assets/icons/icon-cloud.svg';
import ErrorIcon from '@/assets/icons/icon-error.svg';
import GithubIcon from '@/assets/icons/icon-github.svg';
import { Color } from '@/types/colors';

export enum IconName {
    CLOUD = 'cloud',
    ERROR = 'error',
    GITHUB = 'github',
}

interface IIconProps extends HTMLAttributes<HTMLSpanElement> {
    iconName: IconName;
    size?: number;
    color?: Color | string;
}

const Icon: React.FC<IIconProps> = ({ iconName, size = 24, color, className, ...props }) => {
    const IconMap: Record<IconName, ReactNode> = {
        [IconName.CLOUD]: <CloudIcon />,
        [IconName.ERROR]: <ErrorIcon />,
        [IconName.GITHUB]: <GithubIcon />,
    };

    return (
        <span className={cn(styles.icon, className)}
              style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  color,
              }}
              {...props}
        >
            {IconMap[iconName as IconName]}
        </span>
    );
};

export default Icon;
