import { axiosClassic } from '@/shared/api/axios-instance'
import { IPaginationParams } from '@/shared/types/pagination.types'
import type {
	IVideo,
	IVideoResponse,
	IVideosResponse,
} from '@/shared/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'
	private _STUDIO_VIDEOS = '/studio/videos'

	async getAll(searchTerm?: string, params?: IPaginationParams) {
		const response = await axiosClassic.get<IVideosResponse>(
			`${this._VIDEOS}`,
			searchTerm
				? {
						params: { searchTerm, ...params },
					}
				: {},
		)
		return response.data
	}

	async getByPublicId(id: string) {
		const response = await axiosClassic.get<IVideoResponse>(
			`${this._VIDEOS}/by-publicId/${id}`,
		)
		return response.data
	}

	async getExploreVideos(
		userId?: string,
		params?: IPaginationParams,
		excludedIds?: string[],
	) {
		const excludedIdsString = excludedIds?.join(',') || ''
		const response = await axiosClassic.get<IVideosResponse>(
			`${this._VIDEOS}/explore`,
			{
				params: {
					userId: userId || undefined,
					excludeIds: excludedIdsString,
					...params,
				},
			},
		)
		return response.data
	}

	async getTrendingVideos() {
		const response = await axiosClassic.get<IVideo[]>(
			`${this._VIDEOS}/trending`,
		)
		return response.data.slice(0, 5)
	}

	async getVideoGames() {
		const response = await axiosClassic.get<IVideosResponse>(
			`${this._VIDEOS}/games`,
		)
		return response.data
	}

	async updateViews(publicId: string) {
		const response = await axiosClassic.put(
			`${this._VIDEOS}/update-views-count/${publicId}`,
		)
		return response.data
	}
}

export const videoService = new VideoService()
