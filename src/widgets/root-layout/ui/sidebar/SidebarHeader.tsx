import { MenuIcon } from 'lucide-react'
import React from 'react'

import UiLogo from '@/shared/ui/ui-logo'

const SidebarHeader = () => {
	return (
		<div className='flex items-center gap-5 mb-12'>
			<button className='opacity-80 hover:opacity-100 cursor-pointer transition-opacity'>
				<MenuIcon size={28} />
			</button>
			<UiLogo />
		</div>
	)
}

export default SidebarHeader
