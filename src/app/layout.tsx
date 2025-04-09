import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import Providers from '@/app/providers/Providers'

import './globals.scss'

const notoSans = Noto_Sans({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: { absolute: 'YourPlatform', template: '%s | YourPlatform' },
	description: 'Best app for video watching',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${notoSans.variable} antialiased`}
				suppressHydrationWarning
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
