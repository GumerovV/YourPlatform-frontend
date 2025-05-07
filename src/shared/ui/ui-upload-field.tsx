import clsx from 'clsx'
import { UploadCloudIcon } from 'lucide-react'
import React, { InputHTMLAttributes, useId } from 'react'

export interface IUploadField extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	className?: string
	error?: string
}

const UiUploadField = ({ label, error, className, ...rest }: IUploadField) => {
	const inputId = useId()

	return (
		<div className={clsx('mb-5', className)}>
			<label
				htmlFor={inputId}
				className='block text-gray-400 font-semibold mb-2'
			>
				{label}
			</label>
			<label
				htmlFor={inputId}
				className='w-max flex items-center px-4 py-2 bg-transparent text-red-600 border border-primary rounded-lg shadow-lg
				 cursor-pointer hover:bg-primary hover:text-white transition-colors'
			>
				<UploadCloudIcon className='mr-2' />
				Загрузить файл
			</label>
			<input id={inputId} type='file' className='hidden' {...rest} />
			{error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
		</div>
	)
}

export default UiUploadField
