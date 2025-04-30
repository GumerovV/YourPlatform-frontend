import { axiosAuth } from '@/shared/api/axios-instance'
import { IPlaylist } from '@/shared/types/playlist.types'

import { IPlaylistDto } from '.././model/playlist-dto.types'

class PlaylistService {
	private _PLAYLISTS = '/playlists'

	async getMyPlaylist() {
		const response = await axiosAuth.get<IPlaylist[]>(this._PLAYLISTS)
		return response.data
	}

	async getPlaylistById(playlistId: string) {
		const response = await axiosAuth.get<IPlaylist>(
			`${this._PLAYLISTS}/${playlistId}`,
		)
		return response.data
	}

	async toggleVideoPlaylist(playlistId: string, videoId: string) {
		const response = await axiosAuth.post(
			`${this._PLAYLISTS}/${playlistId}/toggle-video`,
			{ videoId },
		)
		return response.data
	}

	async createPlaylist(playlist: IPlaylistDto) {
		const response = await axiosAuth.post(this._PLAYLISTS, playlist)
		return response.data
	}
}

export const playlistService = new PlaylistService()
