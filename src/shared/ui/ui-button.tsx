import { LoaderIcon } from 'lucide-react'
import React, { ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean
	className?: string
}

const UiButton = ({ isLoading, children, className, ...rest }: Props) => {
	return (
		<button
			className={twMerge(
				'px-10 py-2 bg-primary text-white font-semibold rounded hover:bg-red-400 transition-colors disabled:bg-gray-400',
				className,
			)}
			disabled={isLoading}
			{...rest}
		>
			<span className='flex items-center gap-1'>
				{children}
				{isLoading && <LoaderIcon size={15} className='animate-spin' />}
			</span>
		</button>
	)
}

export default UiButton
