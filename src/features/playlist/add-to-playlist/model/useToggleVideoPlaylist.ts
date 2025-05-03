import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { playlistService } from '@/entities/playlist/api/playlist.service'
import { useGetMyPlaylist } from '@/entities/playlist/lib/useGetMyPlaylist'

export function useToggleVideoPlaylist(videoId: string) {
	const { playlists } = useGetMyPlaylist()

	const isExists = playlists?.some(playlist =>
		playlist.videos.some(video => video.id === videoId),
	)

	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['toggle-playlist'],
		mutationFn: (playlistId: string) =>
			playlistService.toggleVideoPlaylist(playlistId, videoId),
		onSuccess() {
			const message = isExists
				? 'Видео успешно удалено из плейлиста!'
				: 'Видео успешно добавлено в плейлист!'
			toast.success(message, { id: 'playlist' })
			queryClient.invalidateQueries({ queryKey: ['playlists'] })
		},
		onError() {
			toast.error('Ошибка')
		},
	})

	return { playlists, togglePlaylist: mutate, isLoading: isPending }
}
