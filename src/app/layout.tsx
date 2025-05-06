import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { SITE_URL } from '@/shared/constants/backend-urls'

import Providers from '@/app/providers/Providers'

import './globals.scss'

const notoSans = Noto_Sans({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: { absolute: 'YourPlatform', template: '%s | YourPlatform' },
	description: 'Best app for video watching',
	metadataBase: new URL(SITE_URL),
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${notoSans.variable} antialiased`}
				suppressHydrationWarning
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
