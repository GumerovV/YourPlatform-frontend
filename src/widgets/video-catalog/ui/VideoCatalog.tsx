'use client'

import { useQuery } from '@tanstack/react-query'
import { type LucideIcon } from 'lucide-react'
import React from 'react'

import { IVideo, IVideosResponse } from '@/shared/types/video.types'
import UiHeading from '@/shared/ui/ui-heading'

import { VideoItem } from '@/entities/video'
import { videoService } from '@/entities/video/api/video.service'

import { extractVideos } from '@/widgets/video-catalog/model/extract-videos.util'
import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

interface Props {
	title: string | React.ReactNode
	Icon?: LucideIcon
	queryKey?: (string | number)[]
	queryFn?: () => Promise<IVideo | IVideosResponse>
	renderItem?: (item: IVideo, icon?: LucideIcon) => React.ReactNode
	loaderCount?: number
}

const VideoCatalog = ({
	title,
	Icon,
	queryFn = () => videoService.getExploreVideos(),
	queryKey = ['explore'],
	renderItem = video => <VideoItem key={video.id} video={video} />,
	loaderCount = 20,
}: Props) => {
	const { data, isLoading } = useQuery({
		queryKey,
		queryFn,
	})

	const videos = extractVideos(data ?? null)

	return (
		<section className='my-7'>
			<UiHeading Icon={Icon}>{title}</UiHeading>
			<div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-7'>
				{isLoading && <VideoSkeletonLoader count={loaderCount} />}
				{!!videos.length && videos.map(video => renderItem(video))}
			</div>
		</section>
	)
}

export default VideoCatalog
