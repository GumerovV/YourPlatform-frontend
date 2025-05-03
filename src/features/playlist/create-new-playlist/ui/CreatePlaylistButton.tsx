import React, { PropsWithChildren, useState } from 'react'
import { twMerge } from 'tailwind-merge'

import UiButton from '@/shared/ui/ui-button'
import UiModal from '@/shared/ui/ui-modal'

import CreatePlaylistForm from '@/features/playlist/create-new-playlist/ui/CreatePlaylistForm'

interface Props {
	publicVideoId?: string
	className?: string
}

const CreatePlaylistButton = ({
	publicVideoId,
	children,
	className,
}: PropsWithChildren<Props>) => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<>
			<UiButton
				onClick={() => setIsOpen(true)}
				className={twMerge(
					'border text-red-600 border-primary bg-transparent hover:bg-primary hover:text-white px-4 py-2 rounded-lg',
					className,
				)}
			>
				{children}
			</UiButton>
			<UiModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				renderHeading={() => (
					<h1 className='text-center text-2xl mb-10'>Создание плейлиста</h1>
				)}
				renderContent={() => (
					<CreatePlaylistForm publicVideoId={publicVideoId} />
				)}
			></UiModal>
		</>
	)
}

export default CreatePlaylistButton
