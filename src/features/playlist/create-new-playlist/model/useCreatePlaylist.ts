import { useMutation, useQueryClient } from '@tanstack/react-query'
import { UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

import { playlistService } from '@/entities/playlist/api/playlist.service'
import { IPlaylistDto } from '@/entities/playlist/model/playlist-dto.types'

export function useCreatePlaylist(resetForm: UseFormReset<IPlaylistDto>) {
	const queryClient = useQueryClient()

	const { mutate, isPending } = useMutation({
		mutationKey: ['create-playlist'],
		mutationFn: (dto: IPlaylistDto) => playlistService.createPlaylist(dto),
		onSuccess() {
			toast.success('Плейлист успешно создан!')
			queryClient.invalidateQueries({ queryKey: ['playlists'] })
			resetForm()
		},
		onError() {
			toast.error('Ошибка при создании плейлиста')
		},
	})

	return { createPlaylist: mutate, isLoading: isPending }
}
