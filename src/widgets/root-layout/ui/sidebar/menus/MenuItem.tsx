import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { PAGE } from '@/shared/constants/routes'
import { useTypeSelector } from '@/shared/lib/hooks/redux'

import { useProfile } from '@/entities/user/model/useProfile'

import { ISidebarItem } from '@/widgets/root-layout/ui/sidebar/sidebar.types'

import styles from '../Sidebar.module.scss'

const MenuItem = ({
	item,
	isActive,
}: {
	item: ISidebarItem
	isActive: boolean
}) => {
	const sidebarIsOpen = useTypeSelector(state => state.sidebar.isOpen)

	const { profile } = useProfile()

	const link =
		item.link === PAGE.MY_CHANNEL && profile
			? PAGE.CHANNEL(profile?.channel?.slug || '')
			: item.link

	return (
		<li>
			<Link
				href={link}
				className={twMerge(
					clsx(styles.item_link, 'group', {
						[styles.item_active]: isActive,
						'flex-col justify-center text-[0.5rem] gap-0': !sidebarIsOpen,
					}),
				)}
				title={item.label}
			>
				<item.icon
					className={clsx(styles.item_icon, {
						[styles.item_iconActive]: isActive,
					})}
				/>
				{<span>{item.label}</span>}
			</Link>
			{item.isBorderBottom && <span className={styles.item_borderBottom} />}
		</li>
	)
}

export default MenuItem
