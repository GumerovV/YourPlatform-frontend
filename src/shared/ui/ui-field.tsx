import clsx from 'clsx'
import React, { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	error?: string
	registration?: UseFormRegisterReturn
}

const UiField = ({ label, error, registration, ...rest }: Props) => {
	return (
		<div className='mb-4'>
			<label>
				<span className='block text-gray-400 font-semibold mb-2'>{label}</span>
				<input
					className={clsx(
						'w-full px-3 py-2 bg-transparent border rounded shadow-sm transition-colors' +
							' focus:outline-none focus:ring-0 focus:border-gray-400',
						error ? 'border-red-500' : 'border-border',
					)}
					{...registration}
					{...rest}
				/>
			</label>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
		</div>
	)
}

export default UiField
