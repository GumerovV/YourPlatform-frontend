import React from 'react'

import { videoService } from '@/entities/video/api/video.service'

import HomePage from '@/pages1/home/ui/home-page'

export const revalidate = 100
export const dynamic = 'force-static'

export default async function Home() {
	const videos = await videoService.getTrendingVideos()

	return <HomePage staticVideos={videos} />
}
