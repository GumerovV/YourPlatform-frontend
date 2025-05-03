import { useQuery } from '@tanstack/react-query'

import { playlistService } from '@/entities/playlist/api/playlist.service'

export function useGetMyPlaylist() {
	const { data: playlists, isLoading } = useQuery({
		queryKey: ['playlists'],
		queryFn: () => playlistService.getMyPlaylist(),
	})

	return { playlists, isLoading }
}
