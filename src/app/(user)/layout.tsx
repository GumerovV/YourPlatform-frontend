import { MainLayout } from '@/widgets/root-layout'

export default function UserLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <MainLayout>{children}</MainLayout>
}
