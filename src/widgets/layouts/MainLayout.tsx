import React, { FC, PropsWithChildren } from 'react'

import Header from './ui/Header'
import Sidebar from './ui/Sidebar'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main>
			<Sidebar />
			<div>
				<Header />
				{children}
			</div>
		</main>
	)
}

export default MainLayout
