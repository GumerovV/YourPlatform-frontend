import clsx from 'clsx'
import React, { ChangeEvent, useState } from 'react'

import UiTooltip from '@/shared/ui/ui-tooltip'

import { getTime } from '../.././lib/video-player.util'

import styles from './VideoPlayer.module.scss'

const VideoProgressBar = ({
	currentTime,
	progress,
	videoTime,
	onChange,
}: {
	videoTime: number
	currentTime: number
	progress: number
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}) => {
	const [hoverTime, setHoverTime] = useState<number | null>(null)
	const [hoverPosition, setHoverPosition] = useState<number | null>(null)

	const handleMouseMove = (e: React.MouseEvent<HTMLInputElement>) => {
		const input = e.currentTarget
		const rect = input.getBoundingClientRect()

		let position = e.clientX - rect.left
		const maxPos = rect.right - rect.left

		if (position > maxPos) position = maxPos
		if (position < 0) position = 0

		const progress = position / rect.width
		const time = Math.floor(progress * videoTime)

		setHoverTime(time)
		setHoverPosition(position)
	}

	return (
		<div className='absolute w-full -top-7 left-0'>
			<UiTooltip
				text={hoverTime !== null ? getTime(hoverTime) : ''}
				position='top'
				isCalculatePosition
				className='p-1'
				styles={{ left: `${hoverPosition}px` }}
			>
				<input
					type='range'
					min={0}
					max={videoTime || 0}
					step={0.0001}
					value={currentTime || 0}
					onChange={onChange}
					onMouseMove={handleMouseMove}
					className={clsx(
						'w-full h-1 appearance-none rounded-lg cursor-pointer',
						styles.input,
					)}
					style={{
						background: `linear-gradient(to right, rgb(220 38 38 / var(--tw-bg-opacity)) ${progress}%, rgba(255, 255, 255, 0.2) ${progress}%`,
					}}
				/>
			</UiTooltip>
		</div>
	)
}

export default VideoProgressBar
