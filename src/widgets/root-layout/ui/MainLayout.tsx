'use client'

import React, { FC, PropsWithChildren, useEffect } from 'react'

import { authService } from '@/entities/session/api/auth.service'

import Header from './Header'
import Sidebar from './sidebar/Sidebar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	useEffect(() => {
		authService.initializeAuth()
	}, [])

	return (
		<main className='min-h-screen flex'>
			<Sidebar />
			<div style={{ flex: '1 1 0%' }}>
				<Header />
				<section className='p-layout'>{children}</section>
			</div>
		</main>
	)
}

export default MainLayout
