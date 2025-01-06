import React from 'react';
import Text, { IBaseTextProps } from '@/components/typography/Text';

interface ILabelProps extends React.HTMLAttributes<HTMLLabelElement>, IBaseTextProps {
    htmlFor: string;
}

const Label: React.FC<ILabelProps> = ({ color = 'color-neutral-000', preset = 'text-preset-5', children, ...props }) => {
    return (
        <Text as={'label'}
              preset={preset}
              color={color}
              {...props}
        >
            {children}
        </Text>
    );
};


export default Label;
