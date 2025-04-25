import { useHotkeys } from 'react-hotkeys-hook'

import { EnumVideoQuality } from '@/shared/types/video.types'

interface Props {
	togglePlay: () => void
	toggleFullScreen: () => void
	skipTime: (type: 'forward' | 'backward') => void
	changeQuality: (quality: EnumVideoQuality) => void
	changeVolume: (value: number) => void
	toggleMute: () => void
	volume: number
}

export function useHotKeysVideoPlayer({ volume, ...fn }: Props) {
	useHotkeys('space', e => {
		e.preventDefault()
		fn.togglePlay()
	})

	useHotkeys('left', () => {
		fn.skipTime('backward')
	})

	useHotkeys('right', () => {
		fn.skipTime('forward')
	})

	useHotkeys('up', e => {
		e.preventDefault()
		fn.changeVolume(Math.min(volume + 0.1, 1))
	})

	useHotkeys('down', e => {
		e.preventDefault()
		fn.changeVolume(Math.max(volume - 0.1, 0))
	})

	useHotkeys('f', () => {
		fn.toggleFullScreen()
	})

	useHotkeys('m', () => {
		fn.toggleMute()
	})
}
