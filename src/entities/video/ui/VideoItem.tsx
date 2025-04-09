import { EllipsisVerticalIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import { formatDate } from '@/shared/lib/utils/format-date'
import { formatViews } from '@/shared/lib/utils/format-views'
import UiAvatar from '@/shared/ui/ui-avatar'
import UiTooltip from '@/shared/ui/ui-tooltip'

import { IVideoItem } from '@/entities/video/model/types'

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
				<div className='w-10 mt-2 mr-4'>
					<Link href={video.channel.slug}>
						<UiAvatar channel={video.channel} />
					</Link>
				</div>
				<div className='w-full flex justify-between'>
					<div>
						<Link
							href={PAGE.VIDEO(video.publicId)}
							className='line-clamp-2 leading-snug'
						>
							<h3>{video.title}</h3>{' '}
						</Link>
						<div className='flex items-center text-sm text-white/50 space-x-1'>
							<UiTooltip text={video.channel.slug} position='top'>
								<span>{video.channel.slug}</span>
							</UiTooltip>
							{video.channel.isVerified && (
								<div className='bg-white/20 rounded-full p-[1px] inline-flex items-center justify-center'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='10'
										height='10'
										viewBox='0 0 24 24'
										fill='white'
									>
										<path d='M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z' />
									</svg>
								</div>
							)}
						</div>
						<div className='flex items-center text-nowrap text-sm text-white/50 space-x-1'>
							<span>{formatViews(video.viewsCount)}</span>
							<span>•</span>
							<span>{formatDate(video.createdAt)}</span>
							{Icon && <Icon size={15} className='text-red-700' />}
						</div>
					</div>
					<div className='ml-5 relative text-white/50'>
						<EllipsisVerticalIcon className='absolute top-0 -right-1 p-0.5 rounded-full hover:bg-bgHover cursor-pointer' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default VideoItem
