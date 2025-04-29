import React from 'react'

import { VideoItemSkeleton } from '@/entities/video'

interface Props {
	count?: number
	renderItem?: (key: number) => React.ReactNode
}

const VideoSkeletonLoader = ({ count = 1, renderItem }: Props) => {
	return (
		<>
			{Array.from({ length: count }).map((_, index) =>
				renderItem ? renderItem(index) : <VideoItemSkeleton key={index} />,
			)}
		</>
	)
}

export default VideoSkeletonLoader
