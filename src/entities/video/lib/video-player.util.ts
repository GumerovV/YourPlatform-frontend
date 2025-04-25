import { HTMLCustomVideoElement } from '@/entities/video/model/types'

export function getVideoPlayerState(video: HTMLCustomVideoElement) {
	const duration = video.duration
	const currentTime = video.currentTime
	const progress = (currentTime / duration) * 100

	return {
		duration,
		currentTime,
		progress,
	}
}

export function getTime(time: number) {
	return Math.floor(time / 60) + ':' + ('0' + Math.floor(time % 60)).slice(-2)
}
