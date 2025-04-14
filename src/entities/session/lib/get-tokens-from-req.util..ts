import { AxiosError } from 'axios'
import { NextRequest } from 'next/server'

import { tokenService } from '@/shared/api/auth/tokens.service'
import { EnumTokens } from '@/shared/types/tokens.enum'

export async function getTokensFromRequest(req: NextRequest) {
	const refreshToken = req.cookies.get(EnumTokens.REFRESH_TOKEN)?.value
	let accessToken = req.cookies.get(EnumTokens.ACCESS_TOKEN)?.value

	if (!refreshToken) {
		req.cookies.delete(EnumTokens.ACCESS_TOKEN)
		return null
	}

	if (!accessToken) {
		try {
			const data = await tokenService.getNewTokensByRefresh(refreshToken)
			accessToken = data.accessToken
		} catch (e) {
			if (e instanceof AxiosError) {
				if (e.message === 'invalid token') {
					req.cookies.delete(EnumTokens.ACCESS_TOKEN)
					return null
				}
			}
			return null
		}
	}

	return { accessToken, refreshToken }
}
