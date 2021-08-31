module.exports = {
    mode: 'jit',
    // purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    purge: [
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('daisyui'),
    ],
}
