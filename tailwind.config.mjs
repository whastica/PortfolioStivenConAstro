/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		colors: {
		  'custom-cyan': '#00BCD4',
		  'custom-orange': '#FFA726',
		  'custom-pink': '#E91E63',
		},
	  },
	},
	plugins: [],
  }
