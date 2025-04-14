import { NextRequest, NextResponse } from 'next/server'

import { PAGE } from '@/shared/constants/routes'
import { STUDIO_PAGE } from '@/shared/constants/studio-routes'

import { protectLoginMiddleware } from '@/entities/session/middleware/protect-login.middleware'
import { protectStudioMiddleware } from '@/entities/session/middleware/protect-studio.middleware'

export async function middleware(req: NextRequest, res: NextResponse) {
	const url = new URL(req.url)
	const pathname = url.pathname

	if (pathname.includes(STUDIO_PAGE.HOME)) {
		return protectStudioMiddleware(req)
	}

	if (pathname.includes(PAGE.AUTH)) {
		return protectLoginMiddleware(req)
	}
}

export const config = {
	matcher: ['/studio/:path*', '/auth/:path*'],
}
