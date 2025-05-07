import clsx from 'clsx'
import { CheckIcon } from 'lucide-react'
import React from 'react'

const UploadVideoProgress = ({
	uploadProgress,
}: {
	uploadProgress: number
}) => {
	return (
		<div className='relative w-full h-7 mb-4 border border-border rounded'>
			<span className='absolute inset-0 z-10 flex items-center justify-center text-xs text-white'>
				Загрузка видео: {Math.floor(uploadProgress)}%
				{uploadProgress === 100 && (
					<CheckIcon size={20} className='ml-1 text-green-500' />
				)}
			</span>
			<div
				className={clsx(
					'absolute h-full bg-primary bg-opacity-80 animate-pulse rounded transition-all',
					uploadProgress === 100 && 'animate-none',
				)}
				style={{ width: `${uploadProgress}%` }}
			/>
		</div>
	)
}

export default UploadVideoProgress
