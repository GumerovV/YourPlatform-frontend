import { useMutation, useQueryClient } from '@tanstack/react-query'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { IVideoDto } from '@/shared/types/upload-video.types'
import { IVideo } from '@/shared/types/video.types'

import { studioVideoService } from '@/entities/video/api/studio-video.service'

export function useEditVideoForm({ video }: { video: IVideo }) {
	const queryClient = useQueryClient()

	const form = useForm<IVideoDto>({
		mode: 'onChange',
		defaultValues: {
			title: video.title,
			description: video.description,
			tags: video?.tags?.map(tag => tag.name) ?? ([] as string[]),
			thumbnailUrl: video.thumbnailUrl,
		},
	})

	const { mutate: updateVideo, isPending: isLoading } = useMutation({
		mutationKey: ['update-video', video.id],
		mutationFn: (data: IVideoDto) => studioVideoService.update(video.id, data),
		onSuccess() {
			toast.success('Видео успешно отредактировано')
			queryClient.invalidateQueries({ queryKey: ['studio-videos'] })
		},
	})

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		updateVideo(data)
	}

	return { form, onSubmit, isLoading }
}
