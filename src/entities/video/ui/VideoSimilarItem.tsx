import { EllipsisVerticalIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { formatDate } from '@/shared/lib/utils/format-date'
import { formatCount } from '@/shared/lib/utils/format-views'
import UiTooltip from '@/shared/ui/ui-tooltip'
import UiVerified from '@/shared/ui/ui-verified'

import { IVideoItem } from '@/entities/video/model/types'

const VideoSimilarItem = ({ video, Icon }: IVideoItem) => {
	return (
		<div className='flex gap-2'>
			<div className='min-w-[168px] aspect-video relative flex-shrink-0'>
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
				<Link
					href={PAGE.VIDEO(video.publicId)}
					className='line-clamp-2 leading-snug'
				>
					<h3>{video.title}</h3>{' '}
				</Link>
				<div className='flex items-center text-xs text-white/50 space-x-1'>
					<UiTooltip text={video.channel.slug} position='top'>
						<span>{video.channel.slug}</span>
					</UiTooltip>
					{video.channel.isVerified && <UiVerified />}
				</div>
				<div className='flex items-center text-nowrap text-xs text-white/50 space-x-1'>
					<span>{formatCount(video.viewsCount)} показов</span>
					<span>•</span>
					<span>{formatDate(video.createdAt)}</span>
					{Icon && <Icon size={15} className='text-red-700' />}
				</div>
			</div>
			<div className='ml-5 relative text-white/50'>
				<EllipsisVerticalIcon className='absolute top-0 -right-1 p-0.5 rounded-full hover:bg-bgHover cursor-pointer' />
			</div>
		</div>
	)
}

export default VideoSimilarItem
