import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import UiButton from '@/shared/ui/ui-button'
import UiField from '@/shared/ui/ui-field'

import { IPlaylistDto } from '@/entities/playlist/model/playlist-dto.types'

import { useCreatePlaylist } from '@/features/playlist/create-new-playlist/model/useCreatePlaylist'

const CreatePlaylistForm = () => {
	const {
		register,
		reset,
		formState: { errors },
		handleSubmit,
	} = useForm<IPlaylistDto>({ mode: 'onChange' })

	const { createPlaylist, isLoading } = useCreatePlaylist(reset)

	const onSubmit: SubmitHandler<IPlaylistDto> = dto => {
		createPlaylist(dto)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='space-y-7'>
			<UiField
				label='Название плейлиста'
				type='text'
				registration={{
					...register('title', { required: 'Название обязательно!' }),
				}}
				placeholder='Введите название плейлиста'
				error={errors.title?.message}
			/>
			<UiField
				label='Публичное id'
				type='text'
				registration={{
					...register('videoPublicId', { required: 'Id обязательно!' }),
				}}
				placeholder='Введите публичное id видео из ссылки'
				error={errors.videoPublicId?.message}
			/>
			<div className='flex justify-center'>
				<UiButton type='submit' isLoading={isLoading} disabled={isLoading}>
					Создать
				</UiButton>
			</div>
		</form>
	)
}

export default CreatePlaylistForm
