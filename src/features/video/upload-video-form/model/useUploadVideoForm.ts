import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { fileService } from '@/shared/api/file/file.service'
import { STUDIO_PAGE } from '@/shared/constants/studio-routes'
import { useUpload } from '@/shared/lib/hooks/useUpload'
import { IVideoDto } from '@/shared/types/upload-video.types'

import { studioVideoService } from '@/entities/video/api/studio-video.service'

export function useUploadVideoForm() {
	const router = useRouter()

	const form = useForm<IVideoDto>({ mode: 'onChange' })
	const { uploadFile, isLoading } = useUpload({
		folder: 'videos',
		handleSuccess(data) {
			const file = data[0]
			if (!file) return

			form.reset({
				videoFileName: file.name,
				maxResolution: file.maxResolution,
				title: file.name,
			})

			toast.success('Файл успешно загружен!')
		},
		handleError() {
			toast.error('Ошибка при загрузке файла!')
		},
	})

	const fileName = form.watch('videoFileName')

	const [isReadyToPublish, setIsReadyToPublish] = useState<boolean>(false)
	const [uploadProgress, setUploadProgress] = useState<number>(0)

	const { data: uploadData, isSuccess } = useQuery({
		queryKey: ['processing-video', fileName],
		queryFn: () => fileService.getProcessingStatus(fileName),
		refetchInterval: query => {
			const progress = query.state.data?.status
			return progress !== undefined && progress < 100 ? 1000 : false
		},
		enabled: !!fileName,
	})

	useEffect(() => {
		if (!uploadData) return

		setUploadProgress(uploadData?.status)

		if (uploadData?.status === 100) {
			setIsReadyToPublish(true)
			toast.success('Видео готово к публикации')
		}
	}, [isSuccess, uploadData])

	const { mutate: createVideo, isPending: isCreateLoading } = useMutation({
		mutationKey: ['create-video'],
		mutationFn: (data: IVideoDto) => studioVideoService.create(data),
		onSuccess() {
			form.reset()
			toast.success('Видео успешно опубликовано!')
			router.push(STUDIO_PAGE.HOME)
		},
		onError() {
			toast.error('Произошла ошибка при публикации!')
		},
	})

	const onSubmit: SubmitHandler<IVideoDto> = data => {
		createVideo(data)
	}

	return {
		form,
		onSubmit,
		fileName,
		isReadyToPublish,
		uploadProgress,
		uploadFile,
		isLoading,
		isCreateLoading,
	}
}
