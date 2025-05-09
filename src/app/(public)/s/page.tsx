import { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import SearchPage from '@/pages1/search'

type Props = {
	searchTerm?: string
}

export async function generateMetadata({
	searchParams,
}: {
	searchParams: Promise<Props>
}): Promise<Metadata> {
	const { searchTerm } = await searchParams
	return {
		title: `${searchTerm}`,
		...NO_INDEX_PAGE,
	}
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SPage = async ({ searchParams }: { searchParams: Promise<Props> }) => {
	return <SearchPage />
}

export default SPage
