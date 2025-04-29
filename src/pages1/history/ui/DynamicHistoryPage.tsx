import dynamic from 'next/dynamic'
import React from 'react'

const DynamicPage = dynamic(() =>
	import('./HistoryPage').then(mod => mod.default),
)

const DynamicHistoryPage = () => {
	return <DynamicPage />
}

export default DynamicHistoryPage
