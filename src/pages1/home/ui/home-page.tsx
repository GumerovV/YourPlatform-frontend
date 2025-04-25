'use client'

import { CompassIcon, FlameIcon } from 'lucide-react'
import React from 'react'

import type { IVideo } from '@/shared/types/video.types'

import { VideoCatalog, VideoStaticCatalog } from '@/widgets/video-catalog'

const HomePage = ({ staticVideos }: { staticVideos: IVideo[] }) => {
	return (
		<section>
			<VideoStaticCatalog
				title='Тренды'
				Icon={FlameIcon}
				videos={staticVideos}
			/>
			<VideoCatalog title='Рекомендации' Icon={CompassIcon} />
		</section>
	)
}

export default HomePage
