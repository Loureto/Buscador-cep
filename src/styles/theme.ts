import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        gray: {
            '800': '#1A202C',
        },
        blue: {
            '50': '#EBF8FF',
            '100': '#BEE3F8',
            '200': '#90CDF4',
            '300': '#63B3ED',
            '400': '#4299E1',
            '500': '#3182CE',
            '600': '#2B6CB0',
            '700': '#2C5282',
            '800': '#2A4365',
            '900': '#1A365D',
        },
    },
    styles: {
        global: {
            body: {
                bg: 'gray.800',
            },
            input: {
                color: '#FFFFFF',
            },
        },
    },
});

export default theme;
