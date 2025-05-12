import clsx from 'clsx'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { useTypeSelector } from '@/shared/lib/hooks/redux'

import { ISubItem } from '@/widgets/root-layout/ui/sidebar/sidebar.types'

import styles from '../Sidebar.module.scss'

interface Props {
	item: ISubItem
	isActive: boolean
}

const SubItem = ({ item, isActive }: Props) => {
	const sidebarIsOpen = useTypeSelector(state => state.sidebar.isOpen)

	return (
		<li className='min-w-0 last:pb-5 last:mb-5 last:border-b border-border'>
			<Link
				href={item.link}
				className={clsx(styles.item_link, {
					[styles.item_active]: isActive,
					'justify-center': !sidebarIsOpen,
				})}
			>
				{item.avatar && (
					<Image
						src={item.avatar}
						alt={item.label}
						width={30}
						height={30}
						className='rounded-full'
					/>
				)}
				{sidebarIsOpen && (
					<span className='min-w-0 flex-1 overflow-hidden'>
						<span className={styles.item_info} title={item.label}>
							<span className='truncate block w-full'>{item.label}</span>
							{item.isRecentUpload && <Dot className='flex-shrink-0' />}
						</span>
					</span>
				)}
			</Link>
		</li>
	)
}

export default SubItem
