import React, { PropsWithChildren } from 'react'

import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll'

interface Props<T> {
	items: T[]
	renderItem?: (item: T) => React.ReactNode
	isLoading: boolean
	isFetchingNextPage: boolean
	fetchNextPage: () => void
	hasNextPage: boolean
	renderLoaderComponent: () => React.ReactNode
	className?: string
}

const UiInfinityScrollContainer = <T,>({
	hasNextPage,
	isLoading,
	isFetchingNextPage,
	renderItem,
	items,
	renderLoaderComponent,
	fetchNextPage,
	className,
	children,
}: PropsWithChildren<Props<T>>) => {
	useInfinityScroll({ hasNextPage, isFetchingNextPage, fetchNextPage })

	if (isLoading && !items.length) renderLoaderComponent()

	return children ? (
		<>
			{isLoading && !items.length ? renderLoaderComponent() : children}
			{isFetchingNextPage && renderLoaderComponent()}
		</>
	) : (
		<div className={className}>
			{isLoading && !items.length
				? renderLoaderComponent()
				: items.map(item => renderItem?.(item))}
			{isFetchingNextPage && renderLoaderComponent()}
		</div>
	)
}

export default UiInfinityScrollContainer
