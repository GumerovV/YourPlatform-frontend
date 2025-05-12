import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { studioVideoService } from '@/entities/video/api/studio-video.service'

export function useDeleteVideo(videoId: string) {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['delete-video', videoId],
		mutationFn: () => studioVideoService.delete(videoId),
		onSuccess() {
			toast.success('Видео успешно удалено')
			queryClient.invalidateQueries({ queryKey: ['studio-videos'] })
		},
		onError() {
			toast.error('Ошибка при удалении видео!')
		},
	})

	return { deleteVideo: mutate, isLoading: isPending }
}
