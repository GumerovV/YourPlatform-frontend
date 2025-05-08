import { useMutation } from '@tanstack/react-query'
import { ChangeEvent, useCallback } from 'react'
import toast from 'react-hot-toast'

import { fileService } from '@/shared/api/file/file.service'
import { errorCatch } from '@/shared/lib/utils/error-catch'
import { validateFileSize } from '@/shared/lib/utils/validate-file-size'
import { IFileResponse } from '@/shared/types/file.types'

interface Props {
	onChange?: (...event: any[]) => void
	folder?: string
	handleSuccess?: (data: IFileResponse[]) => void
	handleError?: () => void
	maxSize?: number
}

type TUseUpload = (props: Props) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => void
	isLoading: boolean
}

export const useUpload: TUseUpload = ({
	onChange,
	folder,
	handleSuccess,
	handleError,
	maxSize,
}) => {
	const { mutate, isPending } = useMutation({
		mutationKey: ['upload-file'],
		mutationFn: (data: FormData) => fileService.upload(data, folder),
		onSuccess(data) {
			onChange?.(data[0].url)
			handleSuccess?.(data)
		},
		onError(e) {
			console.log(e)
			toast.error(errorCatch(e))
			handleError?.()
		},
	})

	const uploadFile = useCallback(
		(e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files

			if (!files) return

			if (!validateFileSize(files[0], maxSize)) return

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
