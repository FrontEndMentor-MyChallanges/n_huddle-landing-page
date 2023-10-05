const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html, js}'],
	theme: {
		extend: {
			colors: {
				primary: '	#674bb1',
				secondary: '#e882e8',
				paragraph: '#F7E7FE',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				openSans: ['Open Sans', 'sans-serif'],
			},
			screens: {
				xxs: '480px',
				xs: '560px',
				...defaultTheme.screens,
			},
			backgroundImage: {
				heroMobile: "url('../images/bg-mobile.svg')",
				heroDesktop: "url('../images/bg-desktop.svg')",
			},
		},
	},
	plugins: [],
};
