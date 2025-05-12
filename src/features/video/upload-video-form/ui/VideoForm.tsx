import React from 'react'
import { Controller, SubmitHandler, UseFormReturn } from 'react-hook-form'

import { IVideoDto } from '@/shared/types/upload-video.types'
import UiField from '@/shared/ui/ui-field'
import UiTagsField from '@/shared/ui/ui-tags-field'
import UiTextarea from '@/shared/ui/ui-textarea'

import VideoThumbnailUploader from '@/features/video/upload-video-form/ui/VideoThumbnailUploader'

interface Props {
	form: UseFormReturn<IVideoDto, any, IVideoDto>
	onSubmit: SubmitHandler<IVideoDto>
	submitButton: React.ReactNode
}

const VideoForm = ({ form, onSubmit, submitButton }: Props) => {
	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<div className='grid grid-cols-[3fr_1fr] gap-5'>
				<div>
					<UiField
						label='Название'
						type='text'
						registration={{
							...form.register('title', {
								required: 'Название видео обязательно!',
							}),
						}}
						placeholder='Введите название видео'
						error={form.formState.errors.title?.message}
					/>
					<UiTextarea
						label='Описание'
						rows={8}
						registration={{
							...form.register('description', {
								required: 'Описание видео обязательно!',
							}),
						}}
						placeholder='Введите описание видео'
						error={form.formState.errors.description?.message}
					/>
					<Controller
						control={form.control}
						name='tags'
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UiTagsField
								label='Теги:'
								tags={value}
								onTagsChange={onChange}
								error={error?.message}
							/>
						)}
					/>
				</div>
				<div>
					<Controller
						control={form.control}
						name='thumbnailUrl'
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<VideoThumbnailUploader
								label='Обложка видео:'
								value={value}
								onChangeFile={onChange}
								videoFileName={form.watch('videoFileName')}
								error={error?.message}
							/>
						)}
					/>
				</div>
			</div>
			<div className='text-right'>{submitButton}</div>
		</form>
	)
}

export default VideoForm
