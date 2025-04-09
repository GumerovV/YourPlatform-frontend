import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import { IAuthResponse, IAuthUserData } from '@/shared/types/auth.types'
import { EnumTokens } from '@/shared/types/tokens.enum'

interface IAuthState {
	user: IAuthUserData | null
	isAuth: boolean
	accessToken: string | null
}

const initialState: IAuthState = {
	user: null,
	isAuth: !!Cookies.get(EnumTokens.ACCESS_TOKEN),
	accessToken: Cookies.get(EnumTokens.ACCESS_TOKEN) || null,
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setAuthData(state, action: PayloadAction<IAuthResponse>) {
			state.user = action.payload.user
			state.isAuth = true
			state.accessToken = action.payload.accessToken
		},
		clearAuthData(state) {
			state.user = null
			state.isAuth = false
			state.accessToken = null
		},
	},
})

export const { setAuthData, clearAuthData } = authSlice.actions
