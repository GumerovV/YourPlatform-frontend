'use client'

import React from 'react'

import { useTypeSelector } from '@/shared/lib/hooks/redux'
import UiButton from '@/shared/ui/ui-button'

import { HeaderProfile } from '@/features/profile'

const Profile = () => {
	const isAuth = useTypeSelector(state => state.auth.isAuth)

	return <>{isAuth ? <HeaderProfile /> : <UiButton>Войти</UiButton>}</>
}

export default Profile
