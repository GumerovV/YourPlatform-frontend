'use client'

import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'
import React from 'react'

import SidebarHeader from '@/widgets/layouts/ui/sidebar/SidebarHeader'
import MenuItem from '@/widgets/layouts/ui/sidebar/menus/MenuItem'
import SidebarMenu from '@/widgets/layouts/ui/sidebar/menus/SidebarMenu'
import SubItem from '@/widgets/layouts/ui/sidebar/menus/SubItem'
import {
	MORE_SIDEBAR_DATA,
	SIDEBAR_DATA,
} from '@/widgets/layouts/ui/sidebar/sidebar.data'
import {
	ISidebarItem,
	ISubItem,
} from '@/widgets/layouts/ui/sidebar/sidebar.types'

const Sidebar = () => {
	const pathname = usePathname() || ''

	return (
		<aside className='w-60 p-layout border-r border-border'>
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

			<SidebarMenu
				menu={[{ avatar: '/file.svg', label: 'Google', link: '/sub' }]}
				itemRender={(item: ISubItem) => (
					<SubItem
						key={item.link}
						item={item}
						isActive={!!match(item.link)(pathname)}
					/>
				)}
			/>

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
