import { useMutation, useQueryClient } from '@tanstack/react-query'

import { commentService } from '@/entities/comment/api/comment.service'

export function useDeleteComment(commentId: string, videoId: string) {
	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['delete-comment'],
		mutationFn: () => commentService.delete(commentId),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['comments', videoId] })
		},
	})

	return { deleteComment: mutate }
}
