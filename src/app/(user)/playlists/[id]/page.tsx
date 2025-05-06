import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import DynamicPlaylistItemsPage from '@/pages1/playlists/playlist-items/ui/DynamicPlaylistsPage'

export const metadata: Metadata = {
	title: 'Плейлист',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <DynamicPlaylistItemsPage />
}

export default Page
