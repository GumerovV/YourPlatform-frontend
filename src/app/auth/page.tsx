import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'

import { AuthForm } from '@/features/auth/form'

export const metadata: Metadata = {
	title: 'Авторизация',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return <AuthForm />
}

export default Page
