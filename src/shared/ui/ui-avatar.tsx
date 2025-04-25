import Image from 'next/image'
import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

import { IChannel } from '@/shared/types/channel.types'

interface Props {
	channel?: IChannel
	size?: number
}

const UiAvatar = ({ channel, size = 40 }: Props) => {
	return channel?.avatarUrl ? (
		<Image
			alt={channel.slug}
			src={channel.avatarUrl}
			width={size}
			height={size}
			className='rounded-full flex-shrink-0 object-cover cursor-pointer'
		/>
	) : (
		<FaUserCircle size={size} className='text-white/30 cursor-pointer' />
	)
}

export default UiAvatar
