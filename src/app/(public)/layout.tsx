import { MainLayout } from '@/widgets/root-layout'

export default function PublicLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return <MainLayout>{children}</MainLayout>
}
