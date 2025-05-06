import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import DynamicPlaylistsPage from '@/pages1/playlists/my-playlists'

export const metadata: Metadata = {
	title: 'Плейлисты',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DynamicPlaylistsPage />
}

export default Page
