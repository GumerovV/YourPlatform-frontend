import { CheckIcon, ListPlusIcon } from 'lucide-react'
import React from 'react'

import UiModal from '@/shared/ui/ui-modal'

import { useToggleVideoPlaylist } from '@/features/playlist/add-to-playlist/model/useToggleVideoPlaylist'

const AddToPlaylistButton = ({ videoId }: { videoId: string }) => {
	const { playlists, togglePlaylist } = useToggleVideoPlaylist(videoId)

	return (
		<UiModal
			variant='options'
			trigger={
				<button className='flex gap-2'>
					<ListPlusIcon />
					Сохранить
				</button>
			}
			renderContent={() => (
				<ul className='rounded'>
					{playlists?.map(playlist => (
						<li
							key={playlist.id}
							onClick={() => togglePlaylist(playlist.id)}
							className='flex items-center px-10 py-1 gap-2 bg-transparent hover:bg-bgHover transition-colors cursor-pointer'
						>
							<span>{playlist.title}</span>
							{playlist.videos.some(video => video.id === videoId) && (
								<CheckIcon size={15} />
							)}
						</li>
					))}
				</ul>
			)}
		/>
	)
}

export default AddToPlaylistButton
