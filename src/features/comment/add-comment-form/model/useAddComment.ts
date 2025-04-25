import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'

import { commentService } from '@/entities/comment/api/comment.service'

export function useAddComment(videoId: string) {
	const {
		register,
		formState: { errors },
		watch,
		reset,
		handleSubmit,
	} = useForm<{ text: string }>({ mode: 'onChange' })

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['add-comment'],
		mutationFn: (text: string) => commentService.create({ videoId, text }),
		onSuccess() {
			queryClient.invalidateQueries({ queryKey: ['comments', videoId] })
		},
	})

	const onSubmit: SubmitHandler<{ text: string }> = text => {
		mutate(text.text)
		reset()
	}

	return {
		onSubmit,
		isLoading: isPending,
		handleSubmit,
		errors,
		register,
		watch,
		reset,
	}
}
