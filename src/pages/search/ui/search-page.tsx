'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import React from 'react'

import { videoService } from '@/entities/video/api/video.service'

import { VideoCatalog } from '@/widgets/video-catalog'

const SearchPage = () => {
	const searchParams = useSearchParams()
	const searchTerm = searchParams?.get('searchTerm') || ''

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchTerm],
		queryFn: () => videoService.getAll(searchTerm),
		enabled: !!searchTerm,
	})

	const isEmpty = !isLoading && (!data || data.videos.length === 0)

	return (
		<section className='my-7'>
			<VideoCatalog
				title={
					isEmpty
						? `Ничего не найдено по запросу: '${searchTerm}'`
						: `Результаты по запросу: '${searchTerm}'`
				}
				queryKey={['search', searchTerm]}
				queryFn={() => videoService.getAll(searchTerm)}
			/>
		</section>
	)
}

export default SearchPage
