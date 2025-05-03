import { EllipsisVerticalIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { formatDate } from '@/shared/lib/utils/format-date'
import { formatCount } from '@/shared/lib/utils/format-views'
import UiAvatar from '@/shared/ui/ui-avatar'
import UiTooltip from '@/shared/ui/ui-tooltip'
import UiVerified from '@/shared/ui/ui-verified'

import { IVideoItem } from '.././model/types'

const VideoItem = ({ video, Icon }: IVideoItem) => {
	return (
		<div>
			<div className='mb-2'>
				<Link href={PAGE.VIDEO(video.publicId)}>
					<Image
						src={video.thumbnailUrl}
						alt={video.title}
						width={0}
						height={0}
						sizes='100vw'
						className='w-full h-auto rounded-lg object-cover'
					/>
				</Link>
			</div>
			<div className='flex flex-auto'>
				<div className='w-10 mt-2 mr-4 flex-shrink-0'>
					<Link href={PAGE.CHANNEL(video.channel.slug)}>
						<UiAvatar channel={video.channel} />
					</Link>
				</div>
				<div className='relative w-full flex justify-between'>
					<div>
						<Link
							href={PAGE.VIDEO(video.publicId)}
							className='w-10/12 2xl:w-full line-clamp-2 leading-snug'
						>
							<h3>{video.title}</h3>{' '}
						</Link>
						<div className='flex items-center text-sm text-white/50 space-x-1'>
							<UiTooltip text={video.channel.slug} position='top'>
								<span>{video.channel.slug}</span>
							</UiTooltip>
							{video.channel.isVerified && <UiVerified />}
						</div>
						<div className='flex items-center text-nowrap text-sm text-white/50 space-x-1'>
							<span>{formatCount(video.viewsCount)} показов</span>
							<span>•</span>
							<span>{formatDate(video.createdAt)}</span>
							{Icon && <Icon size={15} className='text-red-700' />}
						</div>
					</div>
					<div className='text-white/50'>
						<EllipsisVerticalIcon className='absolute top-0 -right-1 p-0.5 rounded-full hover:bg-bgHover cursor-pointer' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoItem
