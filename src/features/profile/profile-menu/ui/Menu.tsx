import React from 'react'

import LogoutButton from '@/features/auth/logout/ui/LogoutButton'

const Menu = () => {
	return (
		<div>
			<div className='py-2 border-b border-border border-b-[1px]'>
				<LogoutButton />
				<LogoutButton />
				<LogoutButton />
			</div>
			<div className='py-2 border-b border-border border-b-[1px]'>
				<LogoutButton />
				<LogoutButton />
				<LogoutButton />
			</div>
			<div className=''>
				<LogoutButton />
				<LogoutButton />
				<LogoutButton />
			</div>
		</div>
	)
}

export default Menu
