import { LoaderCircleIcon } from 'lucide-react'
import React from 'react'

import UiButton from '@/shared/ui/ui-button'
import UiFileUploader from '@/shared/ui/ui-file-uploader'

import { useUploadVideoForm } from '@/features/video/upload-video-form/model/useUploadVideoForm'
import VideoForm from '@/features/video/upload-video-form/ui/VideoForm'

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
				<VideoForm
					form={form}
					onSubmit={onSubmit}
					submitButton={
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
					}
				/>
			)}
		</div>
	)
}

export default UploadVideoForm
