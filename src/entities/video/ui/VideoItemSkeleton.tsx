import React from 'react'
import { twMerge } from 'tailwind-merge'

import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

const VideoItemSkeleton = ({ className }: { className?: string }) => {
	return (
		<div className={twMerge('w-full h-full animate-pulse', className)}>
			<UiSkeletonLoader classNames='h-40 mb-2 rounded-lg' />
			<div className='flex flex-auto'>
				<UiSkeletonLoader classNames='w-10 h-8 mt-2 mr-4 rounded-full' />
				<div className='w-full space-y-2'>
					<UiSkeletonLoader classNames='h-7' />
					<UiSkeletonLoader classNames='w-3/5 h-5 bg-white/20' />
				</div>
			</div>
		</div>
	)
}

export default VideoItemSkeleton
