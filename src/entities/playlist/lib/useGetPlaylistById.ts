import { useQuery } from '@tanstack/react-query'

import { playlistService } from '@/entities/playlist/api/playlist.service'

export function useGetPlaylistById(playlistId: string) {
	const { data, isLoading } = useQuery({
		queryKey: ['playlist', playlistId],
		queryFn: () => playlistService.getPlaylistById(playlistId),
		enabled: !!playlistId,
	})

	return { playlist: data, isLoading }
}
