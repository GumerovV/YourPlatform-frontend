import Image from 'next/image'
import React from 'react'

import { useUpload } from '@/shared/lib/hooks/useUpload'
import UiUploadField, { type IUploadField } from '@/shared/ui/ui-upload-field'

interface Props extends IUploadField {
	value: string
	onChangeFile: (url: string) => void
	videoFileName?: string
}

const VideoThumbnailUploader = ({
	onChangeFile,
	value,
	videoFileName,
	...rest
}: Props) => {
	const { uploadFile, isLoading } = useUpload({
		onChange: onChangeFile,
		folder: 'thumbnails',
	})

	return (
		<div className='mb-10'>
			<UiUploadField onChange={uploadFile} accept='image/*' {...rest} />
			<div className='border border-border rounded-md'>
				{value ? (
					<Image
						src={value}
						alt='Uploaded file'
						width={500}
						height={400}
						priority
						className='rounded-t-md'
					/>
				) : (
					<div className='h-[120px] flex items-center justify-center text-sm text-gray-500 bg-bg rounded-t-md'>
						<p>
							{isLoading ? 'Обложка загружается...' : 'Обложка не загружена'}
						</p>
					</div>
				)}
				<div className='p-1 bg-bgHover text-xs space-y-1'>
					<p>Видео файл: {videoFileName}</p>
					<p>Файл обложки: {value}</p>
				</div>
			</div>
		</div>
	)
}

export default VideoThumbnailUploader
