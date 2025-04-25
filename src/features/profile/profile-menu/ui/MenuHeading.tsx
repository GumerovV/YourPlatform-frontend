import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { IUser } from '@/shared/types/user.types'
import UiAvatar from '@/shared/ui/ui-avatar'

const MenuHeading = ({ profile }: { profile: IUser }) => {
	return (
		<div className='flex gap-5 p-3 text-lg border-b border-border border-b-[1px]'>
			<div className='h-10 w-10'>
				<UiAvatar channel={profile.channel} />
			</div>
			<div className='overflow-hidden'>
				<div>{profile?.name ?? 'Неизвестное имя'}</div>
				<div>{profile?.email}</div>
				<Link
					href={PAGE.CHANNEL(profile?.channel?.slug || '')}
					className='mt-1 text-sm text-blue-500'
				>
					Посмотреть канал
				</Link>
			</div>
		</div>
	)
}

export default MenuHeading
