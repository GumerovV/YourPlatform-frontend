import { CheckIcon } from 'lucide-react'
import React, { PropsWithChildren, ReactNode } from 'react'

import UiModal from '@/shared/ui/ui-modal'

import { useToggleVideoPlaylist } from '@/features/playlist/add-to-playlist/model/useToggleVideoPlaylist'

interface Props {
	videoId: string
	className?: string
	renderAction?: () => ReactNode
}

const AddToPlaylistButton = ({
	videoId,
	renderAction,
	children,
}: PropsWithChildren<Props>) => {
	const { playlists, togglePlaylist } = useToggleVideoPlaylist(videoId)

	return (
		<UiModal
			variant='options'
			trigger={children}
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
					{renderAction && (
						<li className='flex items-center px-10 py-1 gap-2 bg-transparent hover:bg-bgHover transition-colors cursor-pointer'>
							{renderAction()}
						</li>
					)}
				</ul>
			)}
		/>
	)
}

export default AddToPlaylistButton
