import { clearAuthData, setAuthData } from '@/shared/api/auth/auth.slice'
import { tokenService } from '@/shared/api/auth/tokens.service'
import { axiosClassic } from '@/shared/api/axios-instance'
import { IAuthDto, IAuthResponse } from '@/shared/types/auth.types'

import { store } from '@/app/store/store'

class AuthService {
	private _AUTH = '/auth'

	async main(
		type: 'register' | 'login',
		data: IAuthDto,
		recaptchaToken: string | null | undefined,
	) {
		const response = await axiosClassic.post<IAuthResponse>(
			`${this._AUTH}/${type}`,
			data,
			{
				headers: {
					recaptcha: recaptchaToken,
				},
			},
		)

		if (response.data.accessToken) {
			tokenService.saveTokenStorage(response.data.accessToken)
			store.dispatch(setAuthData(response.data))
		}

		return response.data
	}

	async initializeAuth() {
		if (store.getState().auth.user) return

		try {
			await tokenService.getNewTokens()
		} catch {
			store.dispatch(clearAuthData())
		}
	}

	async logout() {
		const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

		if (response.data) {
			tokenService.removeTokenStorage()
		}

		return response.data
	}
}

export const authService = new AuthService()
