import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import DynamicLikedPage from '@/pages1/liked'

export const metadata: Metadata = {
	title: 'Понравившиеся видео',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DynamicLikedPage />
}

export default Page
