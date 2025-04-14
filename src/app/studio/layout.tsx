import React, { PropsWithChildren } from 'react'

import { MainLayout } from '@/widgets/root-layout'

const StudioLayout = ({ children }: PropsWithChildren) => {
	return <MainLayout>{children}</MainLayout>
}

export default StudioLayout
