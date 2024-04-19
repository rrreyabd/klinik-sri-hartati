import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                poppins: [ "Poppins", 'sans-serif']
            },
            colors: {
                'LightBlue': '#DEE1E8',
                'Pistachio': '#CAF0C1',
                'Mint': '#87E4DB',
                'KellyGreen': '#00ACB1',
                'ForestGreen': '#015D67',
                'customWhite': '#F2F2F2',
                'customBlack': '#202124',
            }
        },
    },

    plugins: [forms],
};
