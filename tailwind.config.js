/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],

    theme: {
        extend: {
            colors: {
                screens: {
                    mb: { max: '512px' },
                    sm: { min: '513px', max: '768px' },
                },
                accent: {
                    DEFAULT: '#00366D',
                    dark: '#003362',
                    light: '#96B2CF',
                },
                highlight: '#FFB500',
                text: { DEFAULT: '#A0A0A0', dark: '#2c2c2c' },
                silver: '#CDCDCD',
                bronze: '#FF8A00',
            },
            dropShadow: {
                standard: '10px 10px 18px 0px rgba(150, 178, 207, 0.40)',
            },
            fontFamily: {
                poppins: "'Poppins', Arial, sans-serif",
            },
        },
    },
    plugins: [],
}
