/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'var(--background)',
				foreground: 'var(--foreground)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'bg-spread': {
					'0%': { transform: 'scale(0)', opacity: 0 },
					'100%': { transform: 'scale(4)', opacity: 1 }
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
				'fadeIn': "fadeIn 1s ease-in-out",
				'bg-spread': 'bg-spread 1.5s ease-out forwards'
			}
		}
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.gradient-border': {
					border: '2px solid',
					'border-image-source': 'linear-gradient(180deg, #E22DFF 0%, #4A1453 100%)',
					'border-image-slice': '1', // Required for gradient border
				},
			});
		},
		require("tailwindcss-animate")
	],
};
