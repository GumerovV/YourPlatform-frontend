import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import { ISidebarItem } from '@/widgets/layouts/ui/sidebar/sidebar.types'

const MenuItem = ({
	item,
	isActive,
}: {
	item: ISidebarItem
	isActive: boolean
}) => {
	return (
		<li>
			<Link
				href={item.link}
				className={clsx(
					'group flex items-center gap-5 py-2 px-2 hover:bg-white/5 rounded-lg transition-colors',
					{
						'bg-white/5': isActive,
					},
				)}
			>
				<item.icon
					className={clsx(
						'group-hover:text-primary group-hover:rotate-6 transition-all',
						{
							'text-primary': isActive,
						},
					)}
				/>
				<span>{item.label}</span>
			</Link>
			{item.isBorderBottom && (
				<span className='w-full block h-0.5 bg-border my-5' />
			)}
		</li>
	)
}

export default MenuItem
