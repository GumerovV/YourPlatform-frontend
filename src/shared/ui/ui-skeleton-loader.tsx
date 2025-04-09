import React from 'react'
import { twMerge } from 'tailwind-merge'

const UiSkeletonLoader = ({ classNames }: { classNames: string }) => {
	return (
		<div
			className={twMerge('animate-pulse bg-bgHover rounded-md', classNames)}
		/>
	)
}

export default UiSkeletonLoader
