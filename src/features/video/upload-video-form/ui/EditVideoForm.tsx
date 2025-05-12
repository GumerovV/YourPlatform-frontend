import { EditIcon } from 'lucide-react'
import React, { useState } from 'react'
import { twMerge } from 'tailwind-merge'

import { IVideo } from '@/shared/types/video.types'
import UiButton from '@/shared/ui/ui-button'
import UiModal from '@/shared/ui/ui-modal'

import { useEditVideoForm } from '@/features/video/upload-video-form/model/useEditVideoForm'
import VideoForm from '@/features/video/upload-video-form/ui/VideoForm'

const EditVideoForm = ({
	video,
	className,
}: {
	video: IVideo
	className?: string
}) => {
	const [isShow, setIsShow] = useState<boolean>(false)
	const { form, onSubmit, isLoading } = useEditVideoForm({ video })

	return (
		<>
			<div
				className={twMerge(
					'p-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer',
					className,
				)}
				onClick={() => setIsShow(true)}
			>
				<EditIcon className='text-orange-500' size={15} />
			</div>
			<UiModal
				isOpen={isShow}
				onClose={() => setIsShow(false)}
				className='max-w-[60rem]'
			>
				<VideoForm
					form={form}
					onSubmit={onSubmit}
					submitButton={
						<UiButton
							type='submit'
							disabled={isLoading}
							isLoading={isLoading}
							className='mt-4'
							title='Обновить'
						>
							Обновить
						</UiButton>
					}
				/>
			</UiModal>
		</>
	)
}

export default EditVideoForm
