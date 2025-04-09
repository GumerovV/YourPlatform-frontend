'use client'

import clsx from 'clsx'
import React, { ReactNode, useState } from 'react'

interface Props {
	children: ReactNode
	text: string
	position?: 'top' | 'bottom'
}

const UiTooltip = ({ children, text, position = 'bottom' }: Props) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)

	return (
		<div
			className='relative cursor-pointer'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
			{isHovered && (
				<div
					className={clsx(
						'absolute z-50 bg-neutral-700 bg-opacity-95 text-white text-xs rounded px-5 py-2 whitespace-nowrap',
						position === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
						position === 'bottom' && 'left-1/2 -translate-x-1/2 mt-2',
					)}
				>
					{text}
				</div>
			)}
		</div>
	)
}

export default UiTooltip
