import { axiosClassic } from '@/shared/api/axios-instance'
import type {
	IVideo,
	IVideoResponse,
	IVideosResponse,
} from '@/shared/types/video.types'

class VideoService {
	private _VIDEOS = '/videos'

	async getAll(searchTerm?: string) {
		const response = await axiosClassic.get<IVideosResponse>(
			`${this._VIDEOS}`,
			searchTerm
				? {
						params: { searchTerm },
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

	async getExploreVideos() {
		const response = await axiosClassic.get<IVideosResponse>(
			`${this._VIDEOS}/explore`,
		)
		return response.data
	}

	async getTrendingVideos() {
		const response = await axiosClassic.get<IVideo[]>(
			`${this._VIDEOS}/trending`,
		)
		return response.data.slice(0, 4)
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
