import { PropsWithChildren } from 'react'
import toast from 'react-hot-toast'
import { twMerge } from 'tailwind-merge'

import UiButton from '@/shared/ui/ui-button'

import { useDeleteVideo } from '.././model/useDeleteVideo'

interface Props {
	videoId: string
	className?: string
}

const DeleteVideoButton = ({
	videoId,
	className,
	children,
}: PropsWithChildren<Props>) => {
	const { deleteVideo } = useDeleteVideo(videoId)

	return (
		<div
			className={twMerge(
				'p-1 opacity-80 hover:opacity-100 transition-opacity cursor-pointer',
				className,
			)}
			onClick={() =>
				toast(
					t => (
						<div>
							<div>Вы уверены, что хотите удалить видео?</div>
							<div className='flex items-center justify-center gap-2 mt-4'>
								<UiButton
									className='py-1 px-2 text-sm'
									onClick={() => {
										deleteVideo()
										toast.dismiss(t.id)
									}}
								>
									Да
								</UiButton>
								<UiButton
									className='py-1 px-2 text-sm bg-transparent border border-border hover:bg-bgHover transition-colors'
									onClick={() => toast.dismiss(t.id)}
								>
									Отмена
								</UiButton>
							</div>
						</div>
					),
					{ position: 'top-center' },
				)
			}
		>
			{children}
		</div>
	)
}

export default DeleteVideoButton
