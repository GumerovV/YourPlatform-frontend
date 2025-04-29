import { useMutation, useQueryClient } from '@tanstack/react-query'

import { watchHistoryService } from '@/entities/video/api/watch-history.service'

export function useClearHistory() {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['clear-watch-history'],
		mutationFn: () => watchHistoryService.clearWatchHistory(),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['watch-history'] })
		},
	})

	return {
		clearHistory: mutate,
		isLoading: isPending,
	}
}
