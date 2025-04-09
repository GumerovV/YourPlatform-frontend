import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import { SearchPage } from '@/pages/search'

type Props = {
	searchParams: {
		searchTerm?: string
	}
}

export async function generateMetadata({
	searchParams,
}: Props): Promise<Metadata> {
	const searchTerm = searchParams.searchTerm || ''
	return {
		title: `${searchTerm}`,
		...NO_INDEX_PAGE,
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SPage = ({ searchParams }: Props) => {
	return <SearchPage />
}

export default SPage
