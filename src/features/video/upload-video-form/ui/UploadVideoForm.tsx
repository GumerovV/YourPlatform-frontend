import { LoaderCircleIcon } from 'lucide-react'
import React from 'react'
import { Controller } from 'react-hook-form'

import UiButton from '@/shared/ui/ui-button'
import UiField from '@/shared/ui/ui-field'
import UiFileUploader from '@/shared/ui/ui-file-uploader'
import UiTagsField from '@/shared/ui/ui-tags-field'
import UiTextarea from '@/shared/ui/ui-textarea'

import { useUploadVideoForm } from '@/features/video/upload-video-form/model/useUploadVideoForm'
import VideoThumbnailUploader from '@/features/video/upload-video-form/ui/VideoThumbnailUploader'

import UploadVideoProgress from './UploadVideoProgress'

const UploadVideoForm = () => {
	const {
		form,
		uploadProgress,
		uploadFile,
		fileName,
		isReadyToPublish,
		isLoading,
		onSubmit,
		isCreateLoading,
	} = useUploadVideoForm()

	return (
		<div>
			{!fileName && !isLoading && (
				<UiFileUploader accept='video/*' uploadFile={uploadFile} />
			)}
			{isLoading && (
				<div className='flex items-center justify-center'>
					<LoaderCircleIcon size={30} className='text-white animate-spin' />
				</div>
			)}

			{fileName && <UploadVideoProgress uploadProgress={uploadProgress} />}

			{!!fileName && (
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
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
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
								render={({
									field: { value, onChange },
									fieldState: { error },
								}) => (
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
					<div className='text-right'>
						<UiButton
							type='submit'
							disabled={!isReadyToPublish}
							isLoading={isCreateLoading}
							className='mt-4'
							title={
								!isReadyToPublish
									? 'Дождитесь загрузки видео'
									: 'Опубликовать видео'
							}
						>
							Опубликовать
						</UiButton>
					</div>
				</form>
			)}
		</div>
	)
}

export default UploadVideoForm
