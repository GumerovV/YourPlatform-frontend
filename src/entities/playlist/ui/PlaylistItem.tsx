import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { IPlaylist } from '@/shared/types/playlist.types'

const PlaylistItem = ({ playlist }: { playlist: IPlaylist }) => {
	return (
		<div>
			<div className='relative aspect-video mb-2'>
				<div className='absolute -top-3.5 left-[8%] bg-gray-700 w-[85%] h-[85%] rounded shadow-lg' />
				<div className='absolute -top-2 left-[5%] bg-gray-600 w-[90%] h-[90%] rounded shadow-lg' />
				<Link href={PAGE.PLAYLISTS(playlist.id)}>
					<Image
						src={playlist.videos[0].thumbnailUrl}
						alt={playlist.videos[0].title}
						fill
						className='rounded'
					/>
				</Link>
				<span className='absolute bottom-1 right-1 py-0.5 px-1 bg-black/70 rounded-lg text-xs'>
					{playlist.videos.length} видео
				</span>
			</div>
			<div className='text-lg font-medium'>{playlist.title}</div>
		</div>
	)
}

export default PlaylistItem
