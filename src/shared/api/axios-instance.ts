import axios, { CreateAxiosDefaults } from 'axios'
import Cookies from 'js-cookie'

import { tokenService } from '@/shared/api/auth/tokens.service'
import { errorCatch } from '@/shared/lib/utils/error-catch'
import { EnumTokens } from '@/shared/types/tokens.enum'

import { API_URL } from '.././constants/backend-urls'

console.log(API_URL)

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	withCredentials: true,
}

export const axiosClassic = axios.create(options)

export const axiosAuth = axios.create(options)

axiosAuth.interceptors.request.use(config => {
	const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

axiosAuth.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error?.response?.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			originalRequest &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true

			try {
				await tokenService.getNewTokens()
				return axiosAuth.request(originalRequest)
			} catch (e) {
				if (
					errorCatch(e) === 'jwt expired' ||
					errorCatch(e) === 'Refresh token not passed'
				) {
					tokenService.removeTokenStorage()
					throw e
				}
			}
		}

		throw error
	},
)
