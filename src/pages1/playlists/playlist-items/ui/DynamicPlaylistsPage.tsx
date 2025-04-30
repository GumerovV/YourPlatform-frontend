import dynamic from 'next/dynamic'
import React from 'react'

const DynamicPage = dynamic(() =>
	import('./PlaylistItemsPage').then(mod => mod.default),
)

const DynamicPlaylistItemsPage = () => {
	return <DynamicPage />
}

export default DynamicPlaylistItemsPage
