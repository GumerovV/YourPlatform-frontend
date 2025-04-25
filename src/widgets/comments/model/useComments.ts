import { useQuery } from '@tanstack/react-query'

import { commentService } from '@/entities/comment/api/comment.service'

export function useComments(videoPublicId: string, videoId: string) {
	const { data, isPending, refetch } = useQuery({
		queryKey: ['comments', videoId],
		queryFn: () => commentService.getByPublicVideoId(videoPublicId),
	})

	return { comments: data, isLoading: isPending, refetch }
}
