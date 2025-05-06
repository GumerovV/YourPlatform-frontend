import dynamic from 'next/dynamic'
import React from 'react'

const DynamicPage = dynamic(() =>
	import('./UploadPage').then(mod => mod.default),
)

const DynamicUploadPage = () => {
	return <DynamicPage />
}

export default DynamicUploadPage
