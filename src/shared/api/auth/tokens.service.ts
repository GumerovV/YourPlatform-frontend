import Cookies from 'js-cookie'

import { IAuthResponse } from '@/shared/types/auth.types'
import { EnumTokens } from '@/shared/types/tokens.enum'

import { axiosClassic } from '.././axios-instance'

import { clearAuthData, setAuthData } from './auth.slice'
import { store } from '@/app/store/store'

class TokensService {
	async getNewTokens() {
		const response = await axiosClassic.post<IAuthResponse>(`auth/access-token`)

		if (response.data.accessToken) {
			this.saveTokenStorage(response.data.accessToken)
			store.dispatch(setAuthData(response.data))
		}

		return response.data
	}

	async getNewTokensByRefresh(refreshToken: string) {
		const response = await axiosClassic.post<IAuthResponse>(
			`auth/access-token`,
			{},
			{
				headers: {
					Cookie: `refreshToken=${refreshToken}`,
				},
			},
		)

		return response.data
	}

	saveTokenStorage(accessToken: string) {
		Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
			domain: 'localhost',
			sameSite: 'strict',
			expires: 1 / 24,
			secure: true,
		})
	}

	removeTokenStorage() {
		Cookies.remove(EnumTokens.ACCESS_TOKEN)
		store.dispatch(clearAuthData())
	}
}

export const tokenService = new TokensService()
