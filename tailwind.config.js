/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Outfit',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Open Sans',
					'Helvetica Neue',
					'sans-serif',
				],
			},
			fontWeight: {
				light: 300,
				normal: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
			},
			fontSize: {
				xs: '1rem', // 14px (was 12px)
				sm: '1.15rem', // 16px (was 14px)
				md: '1.25rem', // 18px (our custom size)
				base: '1.35rem', // 20px (was 16px)
				lg: '1.45rem', // 22px (was 18px)
				xl: '1.55rem', // 24px (was 20px)
				'2xl': '1.75rem', // 28px (was 24px)
				'3xl': '2rem', // 32px (was 30px)
				'4xl': '2.5rem', // 40px (was 36px)
				'5xl': '3rem', // 48px (was 48px)
			},
			colors: {
				primary: {
					DEFAULT: '#a78bfa', // more saturated purple
				},
				secondary: {
					DEFAULT: '#f472b6', // more saturated pink
				},
				accent: {
					DEFAULT: '#60a5fa', // more saturated blue
				},
				background: {
					DEFAULT: '#f3f4fa', // very light lavender/blue
					gradient: {
						start: '#F3D1E4', // light pink with more saturation
						end: '#BDDAFF', // light blue with more saturation
					},
				},
			},
		},
	},
	plugins: [require('daisyui')],
};
