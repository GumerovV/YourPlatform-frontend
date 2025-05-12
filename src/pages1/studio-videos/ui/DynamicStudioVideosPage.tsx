import dynamic from 'next/dynamic'
import React from 'react'

const DynamicPage = dynamic(() =>
	import('./StudioVideosPage').then(mod => mod.default),
)

const DynamicStudioVideosPage = () => {
	return <DynamicPage />
}

export default DynamicStudioVideosPage
