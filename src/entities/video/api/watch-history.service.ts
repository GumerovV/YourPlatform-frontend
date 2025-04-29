import { axiosAuth } from '@/shared/api/axios-instance'
import { IVideo } from '@/shared/types/video.types'

class WatchHistoryService {
	private _WATCH_HISTORY = '/watch-history'

	async getWatchHistory() {
		const response = await axiosAuth.get<{ video: IVideo }[]>(
			this._WATCH_HISTORY,
		)

		console.log(response.data)
		return response.data
	}

	async addToWatchHistory(videoId: string) {
		const response = await axiosAuth.post(this._WATCH_HISTORY, { videoId })
		return response.data
	}

	async clearWatchHistory() {
		const response = await axiosAuth.delete(this._WATCH_HISTORY)
		return response.data
	}
}

export const watchHistoryService = new WatchHistoryService()
