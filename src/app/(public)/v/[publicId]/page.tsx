import parse from 'html-react-parser'
import { Metadata } from 'next'
import React from 'react'

import { videoService } from '@/entities/video/api/video.service'

import VideoPage from '@/pages1/video'

export const revalidate = 100
export const dynamic = 'force-static'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ publicId: string }>
}): Promise<Metadata> {
	const { publicId } = await params
	const video = await videoService.getByPublicId(publicId)

	return {
		title: video.title,
		description: parse(video.description.slice(0, 150)).toString(),
		openGraph: {
			type: 'video.other',
			images: [video.thumbnailUrl],
		},
	}
}

export async function generateStaticParams() {
	const data = await videoService.getAll()

	return data.videos.map(video => ({
		publicId: video.publicId,
	}))
}

const Page = async ({ params }: { params: Promise<{ publicId: string }> }) => {
	const { publicId } = await params
	const video = await videoService.getByPublicId(publicId)

	return <VideoPage video={video} />
}

export default Page
