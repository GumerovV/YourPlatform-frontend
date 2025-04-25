import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

import { ISidebarItem } from '@/widgets/root-layout/ui/sidebar/sidebar.types'

import styles from '../Sidebar.module.scss'

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
				className={clsx(styles.item_link, 'group', {
					[styles.item_active]: isActive,
				})}
				title={item.label}
			>
				<item.icon
					className={clsx(styles.item_icon, {
						[styles.item_iconActive]: isActive,
					})}
				/>
				<span>{item.label}</span>
			</Link>
			{item.isBorderBottom && <span className={styles.item_borderBottom} />}
		</li>
	)
}

export default MenuItem
