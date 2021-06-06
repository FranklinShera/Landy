const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            colors: {
                teal:{
                   1: "#175656",
                   2: "#3A6F6F",
                   3: "#0F3434",
                   4: "#0F3434bf",
                },
                limegreen: "#00AAAD",
                muteblack: "#0B0C0C9f",
                offlimegreen: "#EBFDFC",
                myorange: "#FD7834",
                shygray: "#F0F0F0",
            },
            fontFamily: {
                sans: ['Nunito', ...defaultTheme.fontFamily.sans],
            },
            spacing: {
                '5/100': '5%',
                '10/100': '10%',
                '15/100': '15%',
                '20/100': '20%',
                '22/100': '22%',
                '30/100': '30%',
                '35/100': '35%',
                '45/100': '45%',
                '55/100': '55%',
                '65/100': '65%',
                '75/100': '75%',
                '85/100': '85%',
                '95/100': '95%',
            },
        },
    },

    variants: {
        extend: {
            opacity: ['disabled'],
        },
    },

    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
