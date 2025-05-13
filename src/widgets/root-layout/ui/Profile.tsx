'use client'

import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { useTypeSelector } from '@/shared/lib/hooks/redux'
import UiButton from '@/shared/ui/ui-button'

import { HeaderProfile } from '@/features/profile/profile-menu'

const Profile = () => {
	const isAuth = useTypeSelector(state => state.auth.isAuth)

	return (
		<>
			{isAuth ? (
				<HeaderProfile />
			) : (
				<Link href={PAGE.AUTH}>
					<UiButton>Войти</UiButton>
				</Link>
			)}
		</>
	)
}

export default Profile
