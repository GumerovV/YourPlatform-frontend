import { axiosAuth } from '@/shared/api/axios-instance'

class FileService {
	private MEDIA = '/media'

	async upload(file: FormData, folder?: string) {
		const response = await axiosAuth.post<{ url: string; name: string }[]>(
			`/upload-file`,
			file,
			{
				params: { folder },
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		)

		return response.data
	}

	async getProcessingStatus(fileName: string) {
		const response = await axiosAuth.get<number>(
			`/upload-file/status/${fileName}`,
		)
		return response.data
	}
}

export const fileService = new FileService()
