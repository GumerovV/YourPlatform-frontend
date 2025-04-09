import Link from 'next/link'
import React from 'react'

import { INavItem } from '@/widgets/root-layout/model/types'

const NavLinkItem = ({ link, Icon }: INavItem) => {
	return (
		<Link
			href={link}
			className='flex items-center p-3 opacity-70 hover:bg-bgHover rounded-full hover:opacity-100 transition-opacity'
		>
			<Icon size={20} />
		</Link>
	)
}

export default NavLinkItem
