import dynamic from 'next/dynamic'
import React from 'react'

const DynamicPage = dynamic(() =>
	import('./PlaylistsPage').then(mod => mod.default),
)

const DynamicPlaylistsPage = () => {
	return <DynamicPage />
}

export default DynamicPlaylistsPage
