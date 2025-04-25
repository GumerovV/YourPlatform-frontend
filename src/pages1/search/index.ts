import dynamic from 'next/dynamic'

const DynamicSearchPage = dynamic(() =>
	import('./ui/search-page').then(mod => mod.default),
)

export default DynamicSearchPage
