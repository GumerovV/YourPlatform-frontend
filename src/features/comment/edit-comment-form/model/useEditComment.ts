import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { commentService } from '@/entities/comment/api/comment.service'

export function useEditComment(
	commentId: string,
	videoId: string,
	text: string,
) {
	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationKey: ['edit-comment'],
		mutationFn: () => commentService.update(commentId, { text, videoId }),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['comments', videoId] })
			toast.success('Комментарий успешно сохранен')
		},
	})

	return { editComment: mutate }
}
