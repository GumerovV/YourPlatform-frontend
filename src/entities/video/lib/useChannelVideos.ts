import { useInfiniteQuery } from '@tanstack/react-query'

import { studioVideoService } from '@/entities/video/api/studio-video.service'

export function useGetChannelVideos(searchTerm?: string) {
	const { data, isLoading, hasNextPage, isFetchingNextPage, fetchNextPage } =
		useInfiniteQuery({
			queryKey: ['studio-videos'],
			queryFn: ({ pageParam }) =>
				studioVideoService.getAll(searchTerm, {
					page: pageParam.page,
					limit: 12,
				}),
			initialPageParam: { page: 1 },
			getNextPageParam: lastPage => {
				const { page, totalPages } = lastPage
				return page < totalPages ? { page: page + 1 } : undefined
			},
		})

	const videos = data?.pages.flatMap(page => page.videos) || []

	return {
		videos,
		isLoading,
		hasNextPage,
		isFetchingNextPage,
		fetchNextPage,
	}
}
