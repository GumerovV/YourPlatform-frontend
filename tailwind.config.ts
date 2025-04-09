import type { Config } from 'tailwindcss'

import { COLORS } from './src/shared/constants/colors.constants'

const config: Config = {
	content: ['./src/**/*.{html,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				bgModal: '#171717',
				...COLORS,
			},
			padding: {
				layout: '1.2rem',
			},
			transitionDuration: {
				DEFAULT: '333ms',
			},
			transitionTimingFunction: {
				DEFAULT: 'easy-in-out',
			},
		},
	},
	plugins: [],
}

export default config
