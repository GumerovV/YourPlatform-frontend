import React, { FC, PropsWithChildren } from 'react'

import Header from './Header'
import Sidebar from './sidebar/Sidebar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className={'min-h-screen flex'}>
			<Sidebar />
			<div style={{ flex: '1 1 0%' }}>
				<Header />
				<section className='p-layout'>{children}</section>
			</div>
		</main>
	)
}

export default MainLayout
