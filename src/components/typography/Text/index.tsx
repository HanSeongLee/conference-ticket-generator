import React, { createElement, HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';
import { Color, colors } from '@/types/colors';
import { TypographyPreset } from '@/types/typography';

export interface IBaseTextProps {
    preset?: TypographyPreset;
    color?: Color | string;
    gradient?: boolean;
    align?: 'left' | 'center' | 'right';
}

interface ITextProps extends HTMLAttributes<
    HTMLSpanElement | HTMLParagraphElement | HTMLDivElement | HTMLHeadingElement |
    HTMLLabelElement
>, IBaseTextProps {
    as?: 'span' | 'p' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label';
}

const Text: React.FC<ITextProps> = ({
                                        as = 'span', preset = 'text-preset-3', color = 'color-neutral-300', gradient = false,
                                        align = 'left', className, children, ...props
                                    }) => {
    const presetClasses: Record<TypographyPreset, string> = {
        'text-preset-1': styles.preset1,
        'text-preset-2': styles.preset2,
        'text-preset-3': styles.preset3,
        'text-preset-4': styles.preset4,
        'text-preset-5-extra-bold': styles.preset5ExtraBold,
        'text-preset-5': styles.preset5,
        'text-preset-6': styles.preset6,
        'text-preset-7': styles.preset7,
    };

    return createElement(as, {
        className: cn(styles.text, {
            [styles.gradient]: gradient,
            [presetClasses[preset]]: true,
        }, className),
        style: {
            '--color': color in colors ? colors[color as Color] : color,
            '--align': align,
        } as React.CSSProperties,
        ...props,
    }, children);
};

export default Text;
