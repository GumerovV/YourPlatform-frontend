import clsx from 'clsx'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ISubItem } from '@/widgets/layouts/ui/sidebar/sidebar.types'

interface Props {
	item: ISubItem
	isActive: boolean
}

const SubItem = ({ item, isActive }: Props) => {
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
				{item.avatar && (
					<Image src={item.avatar} alt={item.label} width={25} height={25} />
				)}
				<span>
					<span className='flex items-center gap-5'>
						{item.label}
						{item.isRecentUpload && <Dot />}
					</span>
				</span>
			</Link>
		</li>
	)
}

export default SubItem
