import { configureStore } from '@reduxjs/toolkit'

import { authSlice } from '@/shared/api/auth/auth.slice'

import { sidebarSlice } from '@/widgets/root-layout/model/sidebar.slice'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		sidebar: sidebarSlice.reducer,
	},
})

export type TypeRootState = ReturnType<typeof store.getState>
export type TypeAppDispatch = typeof store.dispatch
