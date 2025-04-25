'use client'

import { MenuIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import React from 'react'

import { STUDIO_PAGE } from '@/shared/constants/studio-routes'
import UiLogo from '@/shared/ui/ui-logo'

const SidebarHeader = () => {
	const pathname = usePathname()

	return (
		<div className='flex items-center gap-5 mb-12'>
			<button className='opacity-80 hover:opacity-100 cursor-pointer transition-opacity'>
				<MenuIcon size={28} />
			</button>
			{pathname?.includes(STUDIO_PAGE.HOME) ? (
				<UiLogo title='Studio' />
			) : (
				<UiLogo />
			)}
		</div>
	)
}

export default SidebarHeader
