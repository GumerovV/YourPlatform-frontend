'use client'

import { useInfiniteQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React, { Suspense } from 'react'

import UiHeading from '@/shared/ui/ui-heading'
import UiInfinityScrollContainer from '@/shared/ui/ui-infinity-scroll-container'

import { videoService } from '@/entities/video/api/video.service'

import { VideoStaticCatalog } from '@/widgets/video-catalog'
import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const SearchPage = () => {
	const searchParams = useSearchParams()
	const searchTerm = searchParams?.get('searchTerm') || ''

	const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
		useInfiniteQuery({
			queryKey: ['search', searchTerm],
			queryFn: ({ pageParam }) =>
				videoService.getAll(searchTerm, { page: pageParam.page, limit: 12 }),
			initialPageParam: { page: 1 },
			getNextPageParam: lastPage => {
				const { page, totalPages } = lastPage

				return page < totalPages ? { page: page + 1 } : undefined
			},
		})

	const videos = data?.pages.flatMap(page => page.videos) || []

	const isEmpty = !isLoading && (!data || videos.length === 0)

	return (
		<section className='my-7'>
			<UiHeading>
				{isEmpty
					? `Ничего не найдено по запросу: '${searchTerm}'`
					: `Результаты по запросу: '${searchTerm}'`}
			</UiHeading>
			<UiInfinityScrollContainer
				items={videos}
				isLoading={isLoading}
				isFetchingNextPage={isFetchingNextPage}
				fetchNextPage={fetchNextPage}
				hasNextPage={hasNextPage}
				renderLoaderComponent={() => (
					<div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-7'>
						<VideoSkeletonLoader count={12} />
					</div>
				)}
			>
				<VideoStaticCatalog videos={videos} />
			</UiInfinityScrollContainer>
		</section>
	)
}

function SearchPageSuspense() {
	return (
		<Suspense>
			<SearchPage />
		</Suspense>
	)
}

export default SearchPageSuspense
