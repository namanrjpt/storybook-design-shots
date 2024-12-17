/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./.storybook/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			borderImage: {
				'custom-dashed': 'dashed 6px',
			},
			keyframes: {
				blink: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0' },
				},
			},
			animation: {
				blink: 'blink 1s steps(2) infinite',
			},
			fontFamily: {
				outfit: ['Outfit', 'serif'],
			},
		},
	},
	plugins: [],
};
