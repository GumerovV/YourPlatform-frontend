import { useEffect } from 'react'
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
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Space' || e.key === ' ') {
				e.preventDefault()
				fn.togglePlay()
			}
		}

		window.addEventListener('keydown', handleKeyDown)

		return () => {
			window.removeEventListener('keydown', handleKeyDown)
		}
	}, [fn])

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
