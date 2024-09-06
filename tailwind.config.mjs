/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				main : "#0100FF"
			},
			transitionTimingFunction: {
				easeOutQuart: "cubic-bezier(0.25, 1, 0.5, 1)"
			},
			clipPath: {
				'half-clip': 'polygon(0 0, 50% 0, 50% 100%, 0% 100%)',
			  }
		},
	},
	plugins: [],
}
