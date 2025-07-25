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
		  // Colores adicionales para el sistema de temas
		  'dark': {
			'bg': '#1a1a1a',
			'surface': '#2d2d2d',
			'text': '#ffffff',
			'text-secondary': '#a0a0a0',
		  },
		  'light': {
			'bg': '#ffffff',
			'surface': '#6b7280',
			'text': '#1a1a1a',
			'text-secondary': '#6b7280',
		  }
		},
		backgroundColor: {
		  'theme': 'var(--bg-color)',
		  'theme-surface': 'var(--surface-color)',
		},
		textColor: {
		  'theme': 'var(--text-color)',
		  'theme-secondary': 'var(--text-secondary)',
		},
		borderColor: {
		  'theme': 'var(--border-color)',
		}
	  },
	},
	plugins: [],
}