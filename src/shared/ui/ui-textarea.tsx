import React, { TextareaHTMLAttributes, useId } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string
	error?: string
	registration?: UseFormRegisterReturn
}

const UiTextarea = ({
	label,
	error,
	registration,
	className,
	...rest
}: Props) => {
	const id = useId()

	return (
		<div className=''>
			{!!label && (
				<label htmlFor={id}>
					<span className='block text-gray-400 font-semibold mb-2'>
						{label}
					</span>
				</label>
			)}
			<textarea
				id={id}
				className={twMerge(
					'w-full px-3 py-2 bg-transparent border rounded shadow-sm transition-colors' +
						' focus:outline-none focus:ring-0 focus:border-gray-400 resize-none',
					error ? 'border-red-500' : 'border-border',
					className,
				)}
				{...registration}
				{...rest}
			/>

			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
		</div>
	)
}

export default UiTextarea
