class PublicRoutes {
	AUTH = '/auth'

	HOME = '/'
	TRENDING = '/trends'
	VIDEO_GAMES = '/video-games'

	MY_CHANNEL = '/my-channel'
	SUBSCRIPTIONS = '/subscriptions'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked-videos'

	SETTINGS = '/settings'
	FEEDBACK = '/feedback'

	VIDEO(path: string) {
		return `/v/${path}`
	}

	CHANNEL(path: string) {
		return `/c/${path}`
	}

	SEARCH(searchTerm: string) {
		return `/s?searchTerm=${searchTerm}`
	}

	PLAYLISTS(playlistId?: string) {
		return `/playlists${playlistId ? `/${playlistId}` : ''}`
	}
}

export const PAGE = new PublicRoutes()
