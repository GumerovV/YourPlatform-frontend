import { axiosAuth } from '@/shared/api/axios-instance'
import { IPaginationParams } from '@/shared/types/pagination.types'
import { IVideoDto } from '@/shared/types/upload-video.types'
import type { IVideo, IVideosResponse } from '@/shared/types/video.types'

class StudioVideoService {
	private _VIDEOS = '/studio/videos'

	async getAll(searchTerm?: string, params?: IPaginationParams) {
		const response = await axiosAuth.get<IVideosResponse>(
			`${this._VIDEOS}`,
			searchTerm
				? {
						params: { searchTerm, ...params },
					}
				: { params: { ...params } },
		)
		return response.data
	}

	async getById(id: string) {
		const response = await axiosAuth.get<IVideo>(`${this._VIDEOS}/${id}`)
		return response.data
	}

	async create(dto: IVideoDto) {
		const response = await axiosAuth.post<IVideo>(`${this._VIDEOS}`, dto)
		return response.data
	}

	async update(id: string, dto: IVideoDto) {
		const response = await axiosAuth.put<IVideo>(`${this._VIDEOS}/${id}`, dto)
		return response.data
	}

	async delete(id: string) {
		const response = await axiosAuth.delete(`${this._VIDEOS}/${id}`)
		return response.data
	}
}

export const studioVideoService = new StudioVideoService()
