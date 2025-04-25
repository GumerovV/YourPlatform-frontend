'use client'

import { HeartIcon } from 'lucide-react'
import React from 'react'

import { COLORS } from '@/shared/constants/colors.constants'
import { IVideo } from '@/shared/types/video.types'

import { useLike } from '.././model/useLike'

const LikeButton = ({ video }: { video: IVideo }) => {
	const { isLiked, likesCount, handleLike } = useLike(video)

	return (
		<button
			className='flex items-center gap-1 text-primary'
			onClick={handleLike}
		>
			<HeartIcon
				fill={isLiked ? COLORS.primary : 'transparent'}
				className='transition-colors duration-150'
			/>
			<span
				className={`${isLiked ? 'text-red-600' : 'text-white'} transition-colors duration-150`}
			>
				{likesCount}
			</span>
		</button>
	)
}

export default LikeButton
