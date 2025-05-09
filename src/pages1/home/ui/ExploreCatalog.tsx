'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { type LucideIcon } from 'lucide-react'
import React from 'react'

import { IVideo, IVideosResponse } from '@/shared/types/video.types'
import UiHeading from '@/shared/ui/ui-heading'
import UiInfinityScrollContainer from '@/shared/ui/ui-infinity-scroll-container'

import { VideoItem } from '@/entities/video'
import { videoService } from '@/entities/video/api/video.service'

import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

interface Props {
	title: string | React.ReactNode
	Icon?: LucideIcon
	queryKey?: (string | number)[]
	queryFn?: () => Promise<IVideosResponse>
	renderItem?: (item: IVideo, icon?: LucideIcon) => React.ReactNode
	loaderCount?: number
	userId?: string
}

const VideoCatalog = ({
	userId,
	title,
	Icon,
	queryKey = ['explore'],
	renderItem = video => <VideoItem key={video.id} video={video} />,
	loaderCount = 20,
}: Props) => {
	const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: [...queryKey, userId],
			queryFn: ({ pageParam }) =>
				videoService.getExploreVideos(
					userId,
					{ page: pageParam.page, limit: 12 },
					pageParam.excludedIds,
				),
			initialPageParam: { page: 1, excludedIds: [] as string[] },
			getNextPageParam: (lastPage, allPages) => {
				const { page, totalPages } = lastPage
				const allVideosIds = allPages.flatMap(page =>
					page.videos.map(video => video.id),
				)

				return page < totalPages
					? { page: page + 1, excludedIds: allVideosIds }
					: undefined
			},
		})

	const videos = data?.pages.flatMap(page => page.videos) || []

	return (
		<section className='my-7'>
			<UiHeading Icon={Icon}>{title}</UiHeading>
			<UiInfinityScrollContainer
				items={videos}
				renderItem={renderItem}
				isLoading={isLoading}
				isFetchingNextPage={isFetchingNextPage}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
				renderLoaderComponent={() => (
					<VideoSkeletonLoader count={loaderCount} />
				)}
				className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-7'
			/>
		</section>
	)
}

export default VideoCatalog
