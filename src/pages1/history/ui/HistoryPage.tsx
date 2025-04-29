'use client'

import { useQuery } from '@tanstack/react-query'
import { HistoryIcon } from 'lucide-react'
import React from 'react'

import UiHeading from '@/shared/ui/ui-heading'
import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

import { VideoSimilarItem } from '@/entities/video'
import { watchHistoryService } from '@/entities/video/api/watch-history.service'

import { ClearWatchHistoryButton } from '@/features/watch-history'

import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const HistoryPage = () => {
	const { data: videos, isLoading } = useQuery({
		queryKey: ['watch-history'],
		queryFn: () => watchHistoryService.getWatchHistory(),
	})

	return (
		<section>
			<div className='flex items-end gap-10 mb-5'>
				<UiHeading className='text-2xl mb-0' Icon={HistoryIcon}>
					История просмотров
				</UiHeading>
				<div>{!isLoading && <ClearWatchHistoryButton />}</div>
			</div>
			{isLoading && (
				<div className='space-y-5'>
					<VideoSkeletonLoader
						count={25}
						renderItem={key => (
							<div key={key} className='w-full h-full'>
								<UiSkeletonLoader classNames='w-1/2 h-24' />
							</div>
						)}
					/>
				</div>
			)}
			{videos?.length && !isLoading ? (
				<div className='space-y-4'>
					{videos?.map(history => (
						<VideoSimilarItem
							key={history.video.publicId}
							item={{ video: history.video }}
							size='big'
						/>
					))}
				</div>
			) : (
				<div>История просмотров пуста</div>
			)}
		</section>
	)
}

export default HistoryPage
