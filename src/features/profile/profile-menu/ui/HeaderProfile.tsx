import React, { useState } from 'react'

import UiAvatar from '@/shared/ui/ui-avatar'
import UiModal from '@/shared/ui/ui-modal'
import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

import { useProfile } from '@/entities/user/model/useProfile'

import MenuHeading from '@/features/profile/profile-menu/ui/MenuHeading'

import Menu from './Menu'

const HeaderProfile = () => {
	const { profile, isLoading } = useProfile()
	const [isOpen, setIsIsOpen] = useState(false)

	if (isLoading) return <UiSkeletonLoader classNames='h-10 w-10 rounded-full' />

	return (
		<>
			<UiModal
				isOpen={isOpen}
				variant='options'
				onClose={() => setIsIsOpen(false)}
				trigger={<UiAvatar channel={profile?.channel} />}
				renderHeading={() => profile && <MenuHeading profile={profile} />}
				renderContent={() => <Menu />}
			/>
		</>
	)
}

export default HeaderProfile
