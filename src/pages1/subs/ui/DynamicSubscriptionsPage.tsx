'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const DynamicPage = dynamic(
	() => import('./SubscriptionsPage').then(mod => mod.default),
	{
		ssr: false,
		loading: () => (
			<div className='grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-7'>
				<VideoSkeletonLoader count={25} />
			</div>
		),
	},
)

const DynamicSubscriptionsPage = () => {
	return <DynamicPage />
}

export default DynamicSubscriptionsPage
