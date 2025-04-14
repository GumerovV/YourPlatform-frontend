import { SettingsIcon } from 'lucide-react'
import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/shared/constants/seo.constants'
import UiHeading from '@/shared/ui/ui-heading'

import EditSettingsForm from '@/features/profile/form/ui/EditSettingsForm'

export const metadata: Metadata = {
	title: 'Настройки',
	...NO_INDEX_PAGE,
}

const Page = () => {
	return (
		<div>
			<UiHeading Icon={SettingsIcon}>Настройки</UiHeading>
			<EditSettingsForm />
		</div>
	)
}

export default Page
