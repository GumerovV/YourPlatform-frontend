import { NextRequest, NextResponse } from 'next/server'

import { PAGE } from '@/shared/constants/routes'

import { getTokensFromRequest } from '@/entities/session/lib/get-tokens-from-req.util.'

import { redirect } from '.././lib/redirect.util'

export async function protectStudioMiddleware(req: NextRequest) {
	const tokens = await getTokensFromRequest(req)

	if (!tokens) return redirect(PAGE.AUTH, req.url)

	return NextResponse.next()
}
