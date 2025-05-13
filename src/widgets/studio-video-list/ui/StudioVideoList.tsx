import { ExternalLinkIcon, TrashIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import UiInfinityScrollContainer from '@/shared/ui/ui-infinity-scroll-container'
import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

import { StudioVideoItem } from '@/entities/video'
import { useGetChannelVideos } from '@/entities/video/lib/useChannelVideos'

import { DeleteVideoButton } from '@/features/studio-video/button'
import { EditVideoForm } from '@/features/video/upload-video-form'

import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const StudioVideoList = () => {
	const { videos, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
		useGetChannelVideos()

	return (
		<UiInfinityScrollContainer
			items={videos}
			isLoading={isLoading}
			isFetchingNextPage={isFetchingNextPage}
			fetchNextPage={fetchNextPage}
			hasNextPage={hasNextPage}
			renderLoaderComponent={() => (
				<VideoSkeletonLoader
					count={20}
					renderItem={key => (
						<UiSkeletonLoader key={key} classNames='w-full h-24 mb-5' />
					)}
				/>
			)}
		>
			<div className='grid grid-cols-[2fr_auto_1fr_1fr_1fr_1fr_0.4fr] gap-5 text-sm text-gray-400'>
				{videos.map(video => (
					<StudioVideoItem
						key={video.publicId}
						video={video}
						actions={
							<>
								<Link
									href={PAGE.VIDEO(video.publicId)}
									className='p-1 flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity'
									target='_blank'
								>
									<ExternalLinkIcon className='text-blue-500' size={15} />
								</Link>
								<EditVideoForm video={video} />
								<DeleteVideoButton
									videoId={video.id}
									className='flex items-center gap-1'
								>
									<TrashIcon className='text-red-500' size={15} />
								</DeleteVideoButton>
							</>
						}
					/>
				))}
			</div>
		</UiInfinityScrollContainer>
	)
}

export default StudioVideoList
