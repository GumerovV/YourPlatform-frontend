'use client'

import clsx from 'clsx'
import React, { CSSProperties, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	children: ReactNode
	text: string
	position?: 'top' | 'bottom'
	className?: string
	styles?: CSSProperties
	isCalculatePosition?: boolean
}

const UiTooltip = ({
	children,
	text,
	position = 'bottom',
	isCalculatePosition,
	className,
	styles,
}: Props) => {
	const [isHovered, setIsHovered] = useState<boolean>(false)

	return (
		<div
			className={clsx(
				'relative inline-flex cursor-pointer',
				isCalculatePosition && 'w-full',
			)}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{children}
			{isHovered && (
				<div
					className={twMerge(
						'absolute z-50 bg-neutral-700 text-white text-xs rounded px-5 py-2 whitespace-nowrap',
						position === 'top' && 'bottom-full left-1/2 -translate-x-1/2 mb-2',
						position === 'bottom' && 'left-1/2 -translate-x-1/2 mt-14',
						className,
					)}
					style={{
						opacity: '95%',
						...styles,
					}}
				>
					{text}
				</div>
			)}
		</div>
	)
}

export default UiTooltip
