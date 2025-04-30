import { FolderPlusIcon } from 'lucide-react'
import React, { useState } from 'react'

import UiButton from '@/shared/ui/ui-button'
import UiModal from '@/shared/ui/ui-modal'

import CreatePlaylistForm from '@/features/playlist/create-new-playlist/ui/CreatePlaylistForm'

const CreatePlaylistButton = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<>
			<UiButton
				onClick={() => setIsOpen(true)}
				className='border text-red-600 border-primary bg-transparent hover:bg-primary hover:text-white px-4 py-2 rounded-lg'
			>
				<div className='flex items-center gap-2'>
					<FolderPlusIcon size={20} />
					Новый плейлист
				</div>
			</UiButton>
			<UiModal
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				renderHeading={() => (
					<h1 className='text-center text-2xl mb-10'>Создание плейлиста</h1>
				)}
				renderContent={() => <CreatePlaylistForm />}
			></UiModal>
		</>
	)
}

export default CreatePlaylistButton
