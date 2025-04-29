import dynamic from 'next/dynamic'
import React from 'react'

const DynamicPage = dynamic(() =>
	import('./LikedPage').then(mod => mod.default),
)

const DynamicLikedPage = () => {
	return <DynamicPage />
}

export default DynamicLikedPage
