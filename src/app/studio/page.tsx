import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Студия',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <div>Studio</div>
}

export default Page
