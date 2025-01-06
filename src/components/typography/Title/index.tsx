import React, { HTMLAttributes } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';
import Text, { IBaseTextProps } from '@/components/typography/Text';

interface ITitleProps extends HTMLAttributes<HTMLHeadingElement>, IBaseTextProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title: React.FC<ITitleProps> = ({
                                          level = 1, preset, className, children,
                                          ...props
                                      }) => {
    return <Text as={`h${level}`}
                 preset={preset ? preset : `text-preset-${level}`}
                 className={cn(styles.title, className)}
                 {...props}
    >
        {children}
    </Text>;
};

export default Title;
