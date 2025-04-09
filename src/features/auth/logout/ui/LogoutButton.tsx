import { LogOutIcon } from 'lucide-react'
import React from 'react'

import UiButton from '@/shared/ui/ui-button'

import { authService } from '@/entities/session/api/auth.service'

const LogoutButton = () => {
	return (
		<UiButton
			onClick={() => authService.logout()}
			className='w-full bg-transparent hover:bg-bgHover px-4 py-2 text-md font-normal'
		>
			<LogOutIcon className='mr-2' />
			<span>Выйти</span>
		</UiButton>
	)
}

export default LogoutButton
