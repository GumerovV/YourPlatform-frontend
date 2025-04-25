import { LucideIcon } from 'lucide-react'
import React, { FC, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

const UiHeading: FC<
	PropsWithChildren & { Icon?: LucideIcon; className?: string }
> = ({ children, Icon, className }) => {
	return (
		<div
			className={twMerge(
				'flex items-center gap-1 mb-5 opacity-90 font-semibold text-xl',
				className,
			)}
		>
			{Icon && <Icon className='text-red-600' />}
			<h2>{children}</h2>
		</div>
	)
}

export default UiHeading
