import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import DynamicHistoryPage from '@/pages1/history'

export const metadata: Metadata = {
	title: 'История просмотров',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DynamicHistoryPage />
}

export default Page
