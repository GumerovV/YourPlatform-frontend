import { Volume1Icon, Volume2Icon, VolumeXIcon } from 'lucide-react'
import React from 'react'

import UiTooltip from '@/shared/ui/ui-tooltip'

interface Props {
	value: number
	isMuted: boolean
	changeVolume: (volume: number) => void
	toggleMuted: () => void
}

const VolumeControl = ({
	changeVolume,
	isMuted,
	toggleMuted,
	value,
}: Props) => {
	return (
		<div className='flex items-center gap-1'>
			<UiTooltip text='Отключить звук (m)' position='top'>
				<button onClick={toggleMuted}>
					{isMuted ? (
						<VolumeXIcon fill='white' />
					) : value < 0.5 ? (
						<Volume1Icon fill='white' />
					) : (
						<Volume2Icon fill='white' />
					)}
				</button>
			</UiTooltip>
			<UiTooltip text='Громкость' position='top'>
				<input
					type='range'
					min={0}
					max={1}
					step={0.05}
					value={value}
					onChange={e => changeVolume(parseFloat(e.target.value))}
					className='w-20 h-1 volume-slider appearance-none bg-white rounded-lg cursor-pointer transition-all'
					style={{
						background: `linear-gradient(to right, white ${value * 100}%, rgba(255, 255, 255, 0.2) ${value * 100}%`,
					}}
				/>
			</UiTooltip>
		</div>
	)
}

export default VolumeControl
