import { FlameIcon, LucideIcon } from 'lucide-react'
import React from 'react'

import { IVideo } from '@/shared/types/video.types'
import UiHeading from '@/shared/ui/ui-heading'

import { VideoItem } from '@/entities/video'

interface Props {
	title?: string | React.ReactNode
	Icon?: LucideIcon
	videos: IVideo[]
}

const VideoStaticCatalog = ({ title, videos, Icon }: Props) => {
	return (
		<section className='space-y-7'>
			{!!title && <UiHeading Icon={Icon}>{title}</UiHeading>}
			<div className='grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-7'>
				{!!videos.length &&
					videos.map(video => (
						<VideoItem key={video.id} video={video} Icon={FlameIcon} />
					))}
			</div>
		</section>
	)
}

export default VideoStaticCatalog
