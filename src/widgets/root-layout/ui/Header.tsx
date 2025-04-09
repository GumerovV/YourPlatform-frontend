'use client'

import dynamic from 'next/dynamic'
import React from 'react'

import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

import { VideoSearch } from '@/features/video-search'

const DynamicNavLinks = dynamic(() => import('./NavLinks'), {
	ssr: false,
})

const DynamicProfile = dynamic(() => import('./Profile'), {
	ssr: false,
	loading: () => <UiSkeletonLoader classNames='h-10 w-10 rounded-full' />,
})

const Header = () => {
	return (
		<header className='flex items-center justify-between p-layout border-b border-border'>
			<VideoSearch />
			<div className='flex items-center gap-10'>
				<DynamicNavLinks />
				<DynamicProfile />
			</div>
		</header>
	)
}

export default Header
