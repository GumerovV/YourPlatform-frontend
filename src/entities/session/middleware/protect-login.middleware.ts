import { NextRequest, NextResponse } from 'next/server'

import { STUDIO_PAGE } from '@/shared/constants/studio-routes'

import { getTokensFromRequest } from '@/entities/session/lib/get-tokens-from-req.util.'

import { redirect } from '.././lib/redirect.util'

export async function protectLoginMiddleware(req: NextRequest) {
	const tokens = await getTokensFromRequest(req)

	if (tokens !== null) return redirect(STUDIO_PAGE.HOME, req.url)

	return NextResponse.next()
}
