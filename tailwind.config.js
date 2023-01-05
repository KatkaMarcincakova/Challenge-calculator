/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/*.{html, js}',
    ],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '720px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                mainBlue: 'hsl(212, 78%, 24%)',
                lightBlue: 'hsl(189, 69%, 53%)',
                blue: 'hsl(201, 100%, 42%)',
                orange: 'hsl(39, 98%, 50%)',
                darkOrange: 'hsl(39, 98%, 40%)'
            }
        },
    },
    plugins: [],
}