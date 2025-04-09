import Image from 'next/image'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

import { IChannel } from '@/shared/types/channel.types'

interface Props {
	channel?: IChannel
}

const UiAvatar = ({ channel }: Props) => {
	return channel?.avatarUrl ? (
		<Image
			alt={channel.slug}
			src={channel.avatarUrl}
			width={40}
			height={40}
			className='rounded-full object-cover cursor-pointer'
		/>
	) : (
		<FaUserCircle size={40} className='text-white/30 cursor-pointer' />
	)
}

export default UiAvatar
