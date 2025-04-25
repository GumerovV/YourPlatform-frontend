import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import DynamicSubscriptionsPage from '@/pages1/subs'

export const metadata: Metadata = {
	title: 'Мои подписки',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DynamicSubscriptionsPage />
}

export default Page
