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
				// Autumn palette
				primary: {
					DEFAULT: '#C2410C', // burnt orange
				},
				secondary: {
					DEFAULT: '#B45309', // warm amber-brown
				},
				accent: {
					DEFAULT: '#F59E0B', // golden accent
				},
				error: {
					DEFAULT: '#B91C1C', // deep cranberry red
				},
				success: {
					DEFAULT: '#16A34A', // warm green
				},
				warning: {
					DEFAULT: '#D97706', // amber
				},
				muted: {
					DEFAULT: '#7A5C3E', // warm brown-gray for text and borders
				},
				background: {
					DEFAULT: '#FFF8F1', // warm off-white
					gradient: {
						start: '#eb6424', // peach
						end: '#FFB727C5', // soft golden
					},
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				autumn: {
					primary: '#C2410C',
					'primary-content': '#FFF7ED',
					secondary: '#B45309',
					'secondary-content': '#FFFBEB',
					accent: '#F59E0B',
					'accent-content': '#3F2D00',
					neutral: '#3F2D1E',
					'neutral-content': '#F2E9DC',
					'base-100': '#FFF8F1',
					'base-200': '#FFEDD5',
					'base-300': '#FED7AA',
					info: '#0284C7',
					success: '#16A34A',
					warning: '#D97706',
					error: '#B91C1C',
				},
			},
		],
	},
};
