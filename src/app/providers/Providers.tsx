'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React, { FC, PropsWithChildren } from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

import { COLORS } from '@/shared/constants/colors.constants'

import { store } from '.././store/store'

const Providers: FC<PropsWithChildren> = ({ children }) => {
	const client = new QueryClient({
		defaultOptions: {
			queries: { retry: 1 },
			mutations: { retry: 1 },
		},
	})

	return (
		<QueryClientProvider client={client}>
			<Provider store={store}>
				{children}
				<Toaster
					position='bottom-right'
					toastOptions={{
						style: {
							backgroundColor: COLORS.bgHover,
							color: 'white',
						},
					}}
				/>
			</Provider>
		</QueryClientProvider>
	)
}

export default Providers
