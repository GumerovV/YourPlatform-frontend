import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { IVideo } from '@/shared/types/video.types'

interface Props {
	video: IVideo
	actions?: React.ReactNode
}

const StudioVideoItem = ({ video, actions }: Props) => {
	return (
		<>
			<div className='min-w-[168px] max-h-[100px] aspect-video relative'>
				<Link href={PAGE.VIDEO(video.publicId)}>
					<Image
						src={video.thumbnailUrl}
						alt={video.title}
						fill
						className='rounded-lg object-cover'
					/>
				</Link>
			</div>
			<div>
				<div className='text-xl text-white line-clamp-1' title={video.title}>
					{video.title}
				</div>
				<div>
					<div className='line-clamp-3 overflow-hidden'>
						{video.description}
					</div>
				</div>
			</div>
			<div className='text-center'>
				<div>{dayjs(video.createdAt).format('DD MMM YYYY')}</div>
				<div className='text-gray-500'>Опубликовано</div>
			</div>
			<div className='text-center'>
				{video.viewsCount.toLocaleString()}{' '}
				<div className='text-gray-500'>просмотров</div>
			</div>
			<div className='text-center'>
				{video.likes.length.toLocaleString()}{' '}
				<div className='text-gray-500'>лайков</div>
			</div>
			<div className='text-center'>
				{video.comments?.length.toLocaleString()}{' '}
				<div className='text-gray-500'>комментариев</div>
			</div>
			<div className='flex items-start gap-1'>{actions}</div>
			<div className='col-span-full [&:not(:last-child)]:border-b border-border' />
		</>
	)
}

export default StudioVideoItem
