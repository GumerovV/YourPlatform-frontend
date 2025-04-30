'use client'

import { ListVideoIcon } from 'lucide-react'
import { useParams } from 'next/navigation'
import React from 'react'

import UiHeading from '@/shared/ui/ui-heading'
import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

import { useGetPlaylistById } from '@/entities/playlist/lib/useGetPlaylistById'

import { VideoStaticCatalog } from '@/widgets/video-catalog'
import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const PlaylistItemsPage = () => {
	const { id } = useParams()
	const { playlist, isLoading } = useGetPlaylistById(id as string)

	return (
		<div>
			<UiHeading Icon={ListVideoIcon} className='text-2xl'>
				{isLoading ? (
					<UiSkeletonLoader classNames='w-44 h-8' />
				) : (
					playlist?.title
				)}
			</UiHeading>

			{isLoading && (
				<div className='grid grid-cols-5 gap-5'>
					<VideoSkeletonLoader count={25} />
				</div>
			)}

			{playlist?.videos?.length && !isLoading ? (
				<VideoStaticCatalog title='' videos={playlist.videos} />
			) : (
				<div>Плейлист пустой</div>
			)}
		</div>
	)
}

export default PlaylistItemsPage
