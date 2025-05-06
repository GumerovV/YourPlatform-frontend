'use client'

import React, { FC, PropsWithChildren, useEffect } from 'react'

import { authService } from '@/entities/session/api/auth.service'

import Header from './Header'
import Sidebar from './sidebar/Sidebar'

import styles from './RootLayout.module.scss'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	useEffect(() => {
		authService.initializeAuth()
	}, [])

	return (
		<main className={styles.layout}>
			<Sidebar />
			<Header />
			<section className='relative p-layout'>{children}</section>
		</main>
	)
}

export default MainLayout
