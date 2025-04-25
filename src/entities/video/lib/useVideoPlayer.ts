import { ChangeEvent, useEffect, useRef, useState } from 'react'

import { SITE_URL } from '@/shared/constants/backend-urls'
import { EnumVideoQuality } from '@/shared/types/video.types'

import { useHotKeysVideoPlayer } from '@/entities/video/lib/useHotKeysVideoPlayer'
import { getVideoPlayerState } from '@/entities/video/lib/video-player.util'
import { HTMLCustomVideoElement } from '@/entities/video/model/types'

const SKIP_TIME = 15

export function useVideoPlayer({ fileName }: { fileName: string }) {
	const playerRef = useRef<HTMLCustomVideoElement>(null)

	const [isPlaying, setIsPlaying] = useState<boolean>(false)
	const [quality, setQuality] = useState<EnumVideoQuality>(
		EnumVideoQuality['R1080p'],
	)
	const [currentTime, setCurrentTime] = useState<number>(0)
	const [videoTime, setVideoTime] = useState<number>(0)
	const [progress, setProgress] = useState<number>(0)

	const [volume, setVolume] = useState<number>(1)
	const [isMuted, setIsMuted] = useState<boolean>(false)

	const togglePlay = () => {
		if (!playerRef.current) return

		if (isPlaying) {
			playerRef.current.pause()
		} else {
			playerRef.current.play()
		}
		setIsPlaying(!isPlaying)
	}

	const skipTime = (type: 'forward' | 'backward') => {
		if (!playerRef.current?.currentTime) return

		if (type === 'forward') {
			playerRef.current.currentTime += SKIP_TIME
		} else {
			playerRef.current.currentTime -= SKIP_TIME
		}
	}

	const handleChangeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
		if (!playerRef.current) return

		const newTime = parseFloat(e.target.value)

		playerRef.current.currentTime = newTime

		setCurrentTime(newTime)
		setProgress((newTime / videoTime) * 100)
	}

	const toggleFullScreen = () => {
		if (!playerRef.current) return

		if (playerRef.current?.requestFullscreen) {
			playerRef.current?.requestFullscreen()
		} else if (playerRef.current?.mozRequestFullScreen) {
			playerRef.current?.mozRequestFullScreen()
		} else if (playerRef.current?.webkitRequestFullScreen) {
			playerRef.current?.webkitRequestFullScreen()
		} else if (playerRef.current?.msRequestFullScreen) {
			playerRef.current?.msRequestFullScreen()
		}
	}

	const changeQuality = (quality: EnumVideoQuality) => {
		if (!playerRef.current) return

		playerRef.current.src = `${SITE_URL}/uploads/videos/${quality}/${fileName}`
		playerRef.current.currentTime = currentTime
		playerRef.current.play()

		setQuality(quality)
		setIsPlaying(true)
	}

	const changeVolume = (value: number) => {
		if (!playerRef.current) return

		playerRef.current.volume = value

		setVolume(value)
		setIsMuted(value === 0)
	}

	const toggleMute = () => {
		if (!playerRef.current) return

		const muted = !playerRef.current.muted
		playerRef.current.muted = muted

		setIsMuted(muted)
	}

	useEffect(() => {
		const player = playerRef?.current

		function handleLoadedMetadata() {
			if (!player) return

			const { duration, currentTime, progress } = getVideoPlayerState(player)

			setVideoTime(duration)
			setCurrentTime(currentTime)
			setProgress(progress)
		}

		player?.addEventListener('loadedmetadata', handleLoadedMetadata)

		return () => {
			player?.removeEventListener('loadedmetadata', handleLoadedMetadata)
		}
	}, [])

	useEffect(() => {
		if (!playerRef.current) return

		const { duration, currentTime, progress } = getVideoPlayerState(
			playerRef?.current,
		)

		setVideoTime(duration)
		setCurrentTime(currentTime)
		setProgress(progress)
	}, [playerRef.current?.duration])

	useEffect(() => {
		const player = playerRef?.current

		function updateProgress() {
			if (!player) return

			const { duration, currentTime, progress } = getVideoPlayerState(player)

			setVideoTime(duration)
			setCurrentTime(currentTime)
			setProgress(progress)
		}

		player?.addEventListener('timeupdate', updateProgress)

		return () => {
			player?.removeEventListener('timeupdate', updateProgress)
		}
	}, [])

	const actions = {
		togglePlay,
		toggleFullScreen,
		skipTime,
		changeQuality,
		changeVolume,
		toggleMute,
		handleChangeCurrentTime,
	}

	useHotKeysVideoPlayer({ volume, ...actions })

	return {
		state: {
			isPlaying,
			currentTime,
			videoTime,
			progress,
			quality,
			volume,
			isMuted,
		},
		actions,
		playerRef,
	}
}
