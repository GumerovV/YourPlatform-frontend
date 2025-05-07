'use client'

import clsx from 'clsx'
import {
	FullscreenIcon,
	PauseIcon,
	PlayIcon,
	RectangleHorizontalIcon,
} from 'lucide-react'
import React from 'react'

import { SITE_URL } from '@/shared/constants/backend-urls'
import { EnumVideoQuality } from '@/shared/types/video.types'
import UiTooltip from '@/shared/ui/ui-tooltip'

import VolumeControl from '@/entities/video/ui/video-player/volume-control'

import { useVideoPlayer } from '../.././lib/useVideoPlayer'
import { getTime } from '../.././lib/video-player.util'

import QualityDropdown from './quality-dropdown'
import VideoProgressBar from './video-progress-bar'

interface Props {
	videoFileName: string
	toggleTheaterMode: () => void
	maxResolution: EnumVideoQuality
}

const VideoPlayer = ({
	videoFileName,
	toggleTheaterMode,
	maxResolution,
}: Props) => {
	const { state, actions, playerRef } = useVideoPlayer({
		fileName: videoFileName,
	})

	return (
		<div className='relative group mx-auto overflow-hidden rounded-lg cursor-pointer'>
			<video
				ref={playerRef}
				src={`${SITE_URL}/uploads/videos/${maxResolution}/${videoFileName}`}
				preload='metadata'
				controls={false}
				onClick={() => actions.togglePlay()}
				className='w-full h-full aspect-video'
			/>

			<div
				className={clsx(
					'absolute bottom-5 left-5 right-5 flex items-center justify-between transition-opacity',
					{
						'opacity-100': !state.isPlaying,
						'opacity-0 group-hover:opacity-100': state.isPlaying,
					},
				)}
			>
				<div className='flex items-center gap-4'>
					<UiTooltip
						text='Стоп/Плей (Пробел)'
						position='top'
						className='left-20'
					>
						<button onClick={actions.togglePlay}>
							{state.isPlaying ? (
								<PauseIcon fill='white' className='rounded-md' />
							) : (
								<PlayIcon fill='white' className='rounded-md' />
							)}
						</button>
					</UiTooltip>
					<VideoProgressBar
						videoTime={state.videoTime}
						currentTime={state.currentTime}
						progress={state.progress}
						onChange={actions.handleChangeCurrentTime}
					/>
					<div className='flex items-center gap-1 border-l pl-3 border-white/50'>
						<span>{getTime(state.currentTime)}</span>/
						<span>{getTime(state.videoTime)}</span>
					</div>
				</div>
				<div className='flex items-center gap-5'>
					<QualityDropdown
						currentValue={state.quality}
						onChange={actions.changeQuality}
						maxResolution={maxResolution}
					/>
					<VolumeControl
						value={state.volume}
						changeVolume={actions.changeVolume}
						isMuted={state.isMuted}
						toggleMuted={actions.toggleMute}
					/>
					<UiTooltip text='Режим театра' position='top'>
						<button onClick={toggleTheaterMode}>
							<RectangleHorizontalIcon />
						</button>
					</UiTooltip>
					<UiTooltip
						text='Полноэкранный режим (f)'
						position='top'
						className='-left-16'
					>
						<button onClick={actions.toggleFullScreen}>
							<FullscreenIcon />
						</button>
					</UiTooltip>
				</div>
			</div>
		</div>
	)
}

export default VideoPlayer
