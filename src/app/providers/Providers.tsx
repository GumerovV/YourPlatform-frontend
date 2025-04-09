'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import { store } from '.././store/store'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	const client = new QueryClient()

	return (
		<QueryClientProvider client={client}>
			<Provider store={store}>
				{children}
				<Toaster position='bottom-right' />
			</Provider>
		</QueryClientProvider>
	)
}

export default Providers
