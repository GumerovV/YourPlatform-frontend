'use client'

import { CompassIcon, FlameIcon } from 'lucide-react'
import React from 'react'

import { useTypeSelector } from '@/shared/lib/hooks/redux'
import type { IVideo } from '@/shared/types/video.types'

import { VideoStaticCatalog } from '@/widgets/video-catalog'

import ExploreCatalog from './ExploreCatalog'

const HomePage = ({ staticVideos }: { staticVideos: IVideo[] }) => {
	const { user } = useTypeSelector(state => state.auth)

	return (
		<section>
			<VideoStaticCatalog
				title='Тренды'
				Icon={FlameIcon}
				videos={staticVideos}
			/>
			{/*<VideoCatalog title='Рекомендации' Icon={CompassIcon} userId={user?.id} />*/}
			<ExploreCatalog
				title='Рекомендации'
				Icon={CompassIcon}
				userId={user?.id}
			/>
		</section>
	)
}

export default HomePage
