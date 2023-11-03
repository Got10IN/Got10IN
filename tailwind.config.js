/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],

    theme: {
        extend: {
            screens: {
                mb: { max: '512px' },
                sm: { max: '768px' },
            },
            colors: {
                accent: {
                    DEFAULT: '#00366D',
                    dark: '#003362',
                    light: '#96B2CF',
                },
                highlight: '#FFB500',
                secondary: '#96B2CF',
                text: {
                    DEFAULT: '#A0A0A0',
                    dark: '#2c2c2c',
                    61: '#616161',
                    88: '#888888',
                },
                silver: '#CDCDCD',
                bronze: '#FF8A00',
            },
            spacing: {
                '1/20': '5%',
                '1/10': '10%',
                '3/20': '15%',
                '1/5': '20%',
                '3/10': '30%',
                '2/5': '40%',
                '1/2': '50%',
                '3/5': '60%',
                '7/10': '70%',
                '9/10': '90%',
            },
            dropShadow: {
                standard: '10px 10px 18px rgba(150, 178, 207, 0.40)',
                dot: '0 0 10px #ffb500',
                categories: '0px 4px 16px rgba(0, 0, 0, 0.10)',
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                roboto: ['var(--font-roboto)'],
                inter: ['var(--font-inter)'],
            },
            boxShadow: {
                standard: '0 0 18px 0 rgba(150, 178, 207, 0.40)',
                progress: 'inset 0 0 0 1px #a0a0a0',
                categories: '0px 4px 16px 0px rgba(0, 0, 0, 0.10)',
            },
        },
    },
    plugins: [],
}
