import React from 'react'

import { VideoItemSkeleton } from '@/entities/video'

interface Props {
	count?: number
}

const VideoSkeletonLoader = ({ count = 1 }: Props) => {
	return (
		<>
			{Array.from({ length: count }).map((_, index) => (
				<VideoItemSkeleton key={index} />
			))}
		</>
	)
}

export default VideoSkeletonLoader
