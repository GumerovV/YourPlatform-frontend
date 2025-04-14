import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useCallback } from 'react'
import toast from 'react-hot-toast'

import { fileService } from '@/shared/api/file/file.service'
import { errorCatch } from '@/shared/lib/utils/error-catch'

type TUseUpload = (props: {
	onChange: (...event: any[]) => void
	folder?: string
}) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
}

export const useUpload: TUseUpload = ({ onChange, folder }) => {
	const { mutate, isPending } = useMutation({
		mutationKey: ['upload-file'],
		mutationFn: (data: FormData) => fileService.upload(data, folder),
		onSuccess(data) {
			onChange(data[0].url)
		},
		onError(e) {
			console.log(e)
			toast.error(errorCatch(e))
		},
	})

	const uploadFile = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files

			if (!files) return

			const formData = new FormData()
			formData.append('file', files[0])

			mutate(formData)
		},
		[mutate],
	)

	return {
		isLoading: isPending,
		uploadFile,
	}
}
