import { CheckIcon } from 'lucide-react'
import React from 'react'

import { useOutside } from '@/shared/lib/hooks/useOutside'
import { EnumVideoQuality } from '@/shared/types/video.types'
import UiTooltip from '@/shared/ui/ui-tooltip'

import { VIDEO_QUALITIES } from '@/entities/video/model/quality.data'

interface Props {
	currentValue: EnumVideoQuality
	onChange: (quality: EnumVideoQuality) => void
	maxResolution: EnumVideoQuality
}

const QualityDropdown = ({ currentValue, onChange, maxResolution }: Props) => {
	const { isShow, setIsShow, ref } = useOutside<HTMLDivElement>(false)

	const availableQualities = VIDEO_QUALITIES.slice(
		VIDEO_QUALITIES.indexOf(maxResolution),
	)

	return (
		<div ref={ref} className='relative'>
			<UiTooltip text='Качество' position='top'>
				<button
					onClick={() => setIsShow(!isShow)}
					className='hover:text-primary transition-colors'
				>
					{currentValue}
				</button>
			</UiTooltip>
			{isShow && (
				<ul className='absolute py-1 bg-bgModal rounded bottom-full right-0 z-10 shadow-md cursor-pointer'>
					{availableQualities.map(quality => (
						<li
							key={quality}
							onClick={() => {
								if (currentValue !== quality) {
									onChange(quality)
									setIsShow(!isShow)
								}
							}}
							className='flex items-center px-10 py-1 gap-2 bg-transparent hover:bg-bgHover transition-colors'
						>
							<span>{quality}</span>
							{currentValue === quality && <CheckIcon size={15} />}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default QualityDropdown
