export type Color = keyof typeof COLORS;

export const COLORS = {
    BLACK: '#000000',
    WHITE: '#FFFFFF',
};

export const BRAND_COLORS: { [key: string]: Color; } = {
    PRIMARY: 'BLACK',
    PRIMARY_HOVER: 'WHITE',
};
