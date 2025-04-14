import { useMutation } from '@tanstack/react-query'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import UiButton from '@/shared/ui/ui-button'

import { authService } from '@/entities/session/api/auth.service'

const LogoutButton = () => {
	const router = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['logout'],
		mutationFn: () => authService.logout(),
		onSuccess() {
			router.push(PAGE.HOME)
		},
	})

	return (
		<UiButton
			onClick={() => mutate()}
			className='w-full bg-transparent hover:bg-bgHover px-4 py-2 text-md font-normal transition-none'
		>
			<LogOutIcon className='mr-2' />
			<span>Выйти</span>
		</UiButton>
	)
}

export default LogoutButton
