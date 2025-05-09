import { useEffect } from 'react'

interface Props {
	fetchNextPage: () => void
	hasNextPage: boolean
	isFetchingNextPage: boolean
	threshold?: number
}

export function useInfinityScroll({
	hasNextPage,
	isFetchingNextPage,
	fetchNextPage,
	threshold = 0.99,
}: Props) {
	useEffect(() => {
		const handleScroll = () => {
			if (
				window.innerHeight + document.documentElement.scrollTop >=
					document.documentElement.offsetHeight * threshold &&
				hasNextPage &&
				!isFetchingNextPage
			) {
				fetchNextPage()
			}
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [hasNextPage, isFetchingNextPage, fetchNextPage, threshold])
}
