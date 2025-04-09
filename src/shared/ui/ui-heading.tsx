import { LucideIcon } from 'lucide-react'
import React, { FC, PropsWithChildren } from 'react'

const UiHeading: FC<PropsWithChildren & { Icon?: LucideIcon }> = ({
	children,
	Icon,
}) => {
	return (
		<div className='flex items-center gap-1 mb-5 opacity-90'>
			{Icon && <Icon className='text-red-600' />}
			<h2 className='font-semibold text-xl'>{children}</h2>
		</div>
	)
}

export default UiHeading
