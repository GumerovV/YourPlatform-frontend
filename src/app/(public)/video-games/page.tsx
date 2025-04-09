import { Gamepad2Icon } from 'lucide-react'
import { Metadata } from 'next'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'

import { videoService } from '@/entities/video/api/video.service'

import { VideoStaticCatalog } from '@/widgets/video-catalog'

export const metadata: Metadata = {
	title: 'Видеоигры',
	description: 'Видеоигры за последнее время',
	alternates: {
		canonical: PAGE.VIDEO_GAMES,
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Тренды',
	},
}

export const revalidate = 100
export const dynamic = 'force-static'

const Page = async () => {
	const data = await videoService.getVideoGames()

	return (
		<VideoStaticCatalog
			title={'Видеоигры'}
			Icon={Gamepad2Icon}
			videos={data.videos}
		/>
	)
}

export default Page
