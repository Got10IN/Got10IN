/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        extend: {
            colors: {
                accent: {
                    DEFAULT: '#00366D',
                    dark: '#003362',
                    light: '#96B2CF',
                },
                highlight: '#FFB500',
                text: '#A0A0A0'
            },
        },
    },
    plugins: [],
}
