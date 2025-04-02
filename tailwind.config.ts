import type { Config } from 'tailwindcss'
import { COLORS } from './src/shared/consts/colors.constants'

const config: Config = {
	content: ['./src/**/*.{html,ts,tsx}'],
	theme: {
		extend: {
			colors: COLORS,
		},
	},
	plugins: [],
}

export default config
