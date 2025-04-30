'use client'

import { ListVideoIcon } from 'lucide-react'
import React from 'react'

import UiHeading from '@/shared/ui/ui-heading'
import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

import { useGetMyPlaylist } from '@/entities/playlist/lib/useGetMyPlaylist'
import PlaylistItem from '@/entities/playlist/ui/PlaylistItem'

import { CreatePlaylistButton } from '@/features/playlist/create-new-playlist'

import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const PlaylistsPage = () => {
	const { playlists, isLoading } = useGetMyPlaylist()

	return (
		<div>
			<div className='flex items-center justify-between mb-7'>
				<UiHeading Icon={ListVideoIcon} className='text-2xl'>
					Плейлисты
				</UiHeading>
				<CreatePlaylistButton />
			</div>

			{isLoading && (
				<div className='grid grid-cols-4 gap-5'>
					<VideoSkeletonLoader
						count={25}
						renderItem={key => (
							<UiSkeletonLoader key={key} classNames='w-full h-52' />
						)}
					/>
				</div>
			)}

			{playlists?.length && !isLoading ? (
				<div className='grid grid-cols-4 gap-5'>
					{playlists.map(playlist => (
						<PlaylistItem key={playlist.id} playlist={playlist} />
					))}
				</div>
			) : (
				<div>Еще нет ни одного плейлиста</div>
			)}
		</div>
	)
}

export default PlaylistsPage
