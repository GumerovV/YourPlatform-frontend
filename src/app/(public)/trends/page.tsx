import { Flame } from 'lucide-react'
import { Metadata } from 'next'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'

import { videoService } from '@/entities/video/api/video.service'

import { VideoStaticCatalog } from '@/widgets/video-catalog'

export const metadata: Metadata = {
	title: 'Тренды',
	description: 'Лучшие тренды за последнее время',
	alternates: {
		canonical: PAGE.TRENDING,
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Тренды',
	},
}

export const revalidate = 100
export const dynamic = 'force-static'

const Page = async () => {
	const videos = await videoService.getTrendingVideos()

	return <VideoStaticCatalog title='Тренды' Icon={Flame} videos={videos} />
}

export default Page
