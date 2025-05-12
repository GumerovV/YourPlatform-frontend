'use client'

import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

import { STUDIO_PAGE } from '@/shared/constants/studio-routes'
import { useAppDispatch, useTypeSelector } from '@/shared/lib/hooks/redux'
import UiLogo from '@/shared/ui/ui-logo'

import { setSidebarIsOpen } from '../../model/sidebar.slice'

const SidebarHeader = () => {
	const pathname = usePathname()

	const sidebarIsOpen = useTypeSelector(state => state.sidebar.isOpen)
	const dispatch = useAppDispatch()

	return (
		<div className='sticky top-0 pt-5 bg-bg z-10 flex items-center gap-5 mb-7'>
			<button
				className='opacity-80 hover:opacity-100 cursor-pointer transition-opacity'
				onClick={() => dispatch(setSidebarIsOpen(!sidebarIsOpen))}
			>
				<MenuIcon size={28} />
			</button>
			{pathname?.includes(STUDIO_PAGE.HOME) ? (
				<UiLogo title='Studio' isTitle={sidebarIsOpen} />
			) : (
				<UiLogo isTitle={sidebarIsOpen} />
			)}
		</div>
	)
}

export default SidebarHeader
