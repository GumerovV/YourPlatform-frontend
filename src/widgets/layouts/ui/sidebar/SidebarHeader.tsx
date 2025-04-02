import { MenuIcon, SquarePlayIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { COLORS } from '@/shared/constants/colors.constants'
import { PUBLIC_PAGE } from '@/shared/constants/routes'

const SidebarHeader = () => {
	return (
		<div className='flex items-center gap-5 mb-12'>
			<button className='opacity-80 hover:opacity-100 cursor-pointer transition-opacity'>
				<MenuIcon size={28} />
			</button>
			<Link href={PUBLIC_PAGE.HOME} className='flex items-center gap-1'>
				<SquarePlayIcon color={COLORS.primary} />
				<span className='text-xl font-semibold'>iVideo</span>
			</Link>
		</div>
	)
}

export default SidebarHeader
