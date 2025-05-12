import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ISidebarState {
	isOpen: boolean
}

const initialState: ISidebarState = {
	isOpen: true,
}

export const sidebarSlice = createSlice({
	name: 'sidebar',
	initialState,
	reducers: {
		setSidebarIsOpen: (
			state: ISidebarState,
			action: PayloadAction<boolean>,
		) => {
			state.isOpen = action.payload
		},
	},
})

export const { setSidebarIsOpen } = sidebarSlice.actions
