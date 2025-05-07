import { UploadIcon } from 'lucide-react'
import React, { ChangeEvent, InputHTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	uploadFile: React.ChangeEventHandler<HTMLInputElement>
}

const UiFileUploader = ({ uploadFile, ...rest }: Props) => {
	const [isDragging, setIsDragging] = useState<boolean>(false)

	const handleDragOver: React.DragEventHandler<HTMLLabelElement> = e => {
		e.preventDefault()
		setIsDragging(true)
	}

	const handleDragLeave = () => setIsDragging(false)

	const handleDrop: React.DragEventHandler<HTMLLabelElement> = e => {
		e.preventDefault()
		setIsDragging(false)

		const file = e.dataTransfer?.files[0]
		if (file)
			uploadFile({
				target: { files: [file] },
			} as unknown as ChangeEvent<HTMLInputElement>)
	}

	return (
		<label
			className={twMerge(
				'h-72 flex flex-col items-center justify-center px-4 py-6 border border-dashed border-gray-500 rounded-md cursor-pointer transition-all duration-200',
				isDragging ? 'bg-neutral-700 border-solid' : 'hover:bg-neutral-700',
			)}
			onDragOver={handleDragOver}
			onDragLeave={handleDragLeave}
			onDrop={handleDrop}
		>
			<div className='flex flex-col items-center text-center text-gray-400'>
				<UploadIcon size={50} className='text-gray-500 mb-4' />
				<p className='whitespace-nowrap'>
					{isDragging
						? 'Отпустите здесь'
						: 'Перетащите файлы в эту зону или нажмите для выбора'}
				</p>
			</div>
			<input type='file' className='hidden' {...rest} onChange={uploadFile} />
		</label>
	)
}

export default UiFileUploader
