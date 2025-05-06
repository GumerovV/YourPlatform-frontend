import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import DynamicUploadPage from '@/pages1/upload'

export const metadata: Metadata = {
	title: 'Публикация',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DynamicUploadPage />
}

export default Page
