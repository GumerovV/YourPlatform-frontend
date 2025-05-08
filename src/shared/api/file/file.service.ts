import { axiosAuth } from '@/shared/api/axios-instance'
import { IFileResponse, IFileUploadStatus } from '@/shared/types/file.types'

class FileService {
	private MEDIA = '/media'

	async upload(file: FormData, folder?: string) {
		const response = await axiosAuth.post<IFileResponse[]>(
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
		const response = await axiosAuth.get<IFileUploadStatus>(
			`/upload-file/status/${fileName}`,
		)
		return response.data
	}
}

export const fileService = new FileService()
