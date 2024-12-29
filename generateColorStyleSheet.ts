import { BRAND_COLORS, Color, COLORS } from '@/styles/colors';
import * as fs from 'fs';
import * as path from 'path';

const makeColorName = (color: string) => {
    return '--color-' + color.replace(/_/gi, '-').toLowerCase();
};

export const generateColorStyleSheet = () => {
    let styleSheet = '';
    for (const colorName in COLORS) {
        styleSheet += `\t${makeColorName(colorName)}: ${COLORS[colorName as Color]};\n`;
    }
    styleSheet += '\n';
    for (const colorName in BRAND_COLORS) {
        styleSheet += `\t${makeColorName(colorName)}: var(${makeColorName(BRAND_COLORS[colorName])});\n`;
    }
    return styleSheet;
};

const createFile = (dir: string, file: string, data: string) => {
    fs.writeFileSync(path.join(dir, file), data, 'utf8');
};

const main = () => {
    const filename = 'colors.scss';
    const directory = './styles';
    createFile(directory, filename, `:root {\n${generateColorStyleSheet()}}\n`);
    console.log(`${filename} has been created in ${directory}`);
};

main();
