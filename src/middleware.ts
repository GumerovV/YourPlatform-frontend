import { NextRequest } from 'next/server'

import { PAGE } from '@/shared/constants/routes'
import { STUDIO_PAGE } from '@/shared/constants/studio-routes'

import { protectLoginMiddleware } from '@/entities/session/middleware/protect-login.middleware'
import { protectStudioMiddleware } from '@/entities/session/middleware/protect-studio.middleware'

export async function middleware(req: NextRequest) {
	const url = new URL(req.url)
	const pathname = url.pathname

	if (
		pathname.includes(STUDIO_PAGE.HOME) ||
		pathname.includes(PAGE.SUBSCRIPTIONS) ||
		pathname.includes(PAGE.HISTORY) ||
		pathname.includes(PAGE.LIKED_VIDEOS) ||
		pathname.includes('/playlists')
	) {
		return protectStudioMiddleware(req)
	}

	if (pathname.includes(PAGE.AUTH)) {
		return protectLoginMiddleware(req)
	}
}

export const config = {
	matcher: [
		'/studio/:path*',
		'/auth/:path*',
		'/subscriptions:path*',
		'/liked-videos:path*',
		'/history:path*',
		'/playlists:path*',
	],
}
