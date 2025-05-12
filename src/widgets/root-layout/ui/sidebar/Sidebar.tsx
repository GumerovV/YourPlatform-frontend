'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { STUDIO_PAGE } from '@/shared/constants/studio-routes'
import { useTypeSelector } from '@/shared/lib/hooks/redux'

import { useProfile } from '@/entities/user/model/useProfile'

import SidebarHeader from './SidebarHeader'
import MenuItem from './menus/MenuItem'
import SidebarMenu from './menus/SidebarMenu'
import SubItem from './menus/SubItem'
import {
	MORE_SIDEBAR_DATA,
	SIDEBAR_DATA,
	STUDIO_SIDEBAR_DATA,
} from './sidebar.data'
import { ISidebarItem, ISubItem } from './sidebar.types'

import styles from './Sidebar.module.scss'

const Sidebar = () => {
	const pathname = usePathname() || ''

	const sidebarIsOpen = useTypeSelector(state => state.sidebar.isOpen)

	const { profile } = useProfile()

	const subscriptionItems: ISubItem[] =
		profile?.subscriptions?.map(sub => ({
			avatar: sub.avatarUrl,
			label: sub.slug,
			link: PAGE.CHANNEL(sub.slug),
			isRecentUpload: false,
		})) || []

	return (
		<aside
			className={styles.sidebar}
			style={{
				maxWidth: sidebarIsOpen ? '250px' : '100px',
				minWidth: sidebarIsOpen ? '240px' : '100px',
			}}
		>
			<SidebarHeader />
			<SidebarMenu
				menu={SIDEBAR_DATA}
				itemRender={(item: ISidebarItem) => (
					<MenuItem
						key={item.label}
						item={item}
						isActive={!!match(item.link)(pathname)}
					/>
				)}
			/>

			{!!pathname.includes(STUDIO_PAGE.HOME) && (
				<SidebarMenu
					title='Студия'
					menu={STUDIO_SIDEBAR_DATA}
					itemRender={(item: ISidebarItem) => (
						<MenuItem
							key={item.link}
							item={item}
							isActive={!!match(item.link)(pathname)}
						/>
					)}
				/>
			)}

			{profile && (
				<SidebarMenu
					title='Подписки'
					menu={subscriptionItems}
					itemRender={(item: ISubItem) => (
						<SubItem
							key={item.link}
							item={item}
							isActive={!!match(item.link)(pathname)}
						/>
					)}
				/>
			)}

			<SidebarMenu
				title='Подробнее'
				menu={MORE_SIDEBAR_DATA}
				itemRender={(item: ISidebarItem) => (
					<MenuItem
						key={item.label}
						item={item}
						isActive={!!match(item.link)(pathname)}
					/>
				)}
			/>
		</aside>
	)
}

export default Sidebar
