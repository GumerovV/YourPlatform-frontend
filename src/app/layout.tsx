import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { MainLayout } from '@/widgets/layouts'

import './globals.scss'

const notoSans = Noto_Sans({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'iVideo',
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
				<MainLayout>{children}</MainLayout>
			</body>
		</html>
	)
}
