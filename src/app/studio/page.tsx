import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import DynamicStudioVideosPage from '@/pages1/studio-videos'

export const metadata: Metadata = {
	title: 'Студия',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DynamicStudioVideosPage />
}

export default Page
