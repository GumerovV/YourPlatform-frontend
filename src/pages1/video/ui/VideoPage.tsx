'use client'

import clsx from 'clsx'
import { ListPlusIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

import { PAGE } from '@/shared/constants/routes'
import { formatCount } from '@/shared/lib/utils/format-views'
import { IVideoResponse } from '@/shared/types/video.types'
import UiAvatar from '@/shared/ui/ui-avatar'
import UiCollapsibleBlock from '@/shared/ui/ui-collapsible-block'

import { VideoPlayer, VideoSimilarItem } from '@/entities/video'

import { SubscribeButton } from '@/features/channel/subscribe'
import { LikeButton } from '@/features/video/like-button'

import Comments from '@/widgets/comments/ui/Comments'

import { useUpdateViews } from '@/pages1/video/lib/useUpdateViews'

const VideoPage = ({ video }: { video: IVideoResponse }) => {
	const [isTheaterMode, setIsTheaterMode] = useState<boolean>(false)

	const toggleTheaterMode = () => {
		setIsTheaterMode(!isTheaterMode)
	}

	useUpdateViews({ video })

	return (
		<section className='relative grid grid-cols-[4fr_1fr] gap-10'>
			<div>
				<div
					className={clsx(
						isTheaterMode ? 'absolute w-full top-0 left-0' : 'relative',
					)}
				>
					<VideoPlayer
						videoFileName={video.videoFileName}
						toggleTheaterMode={toggleTheaterMode}
						maxResolution={video.maxResolution}
					/>
				</div>
				<div
					className={clsx(
						'flex items-start justify-between py-5 border-b border-border',
						isTheaterMode && 'pt-[60rem]',
					)}
				>
					<div className=''>
						<h1 className='text-2xl font-semibold mb-2'>{video.title}</h1>
						<span className='text-sm text-gray-400'>
							{video.viewsCount.toLocaleString()} показов
						</span>
					</div>
					<div className='flex items-center gap-5'>
						<button className='flex gap-2'>
							<ListPlusIcon />
							Сохранить
						</button>
						<LikeButton video={video} />
					</div>
				</div>
				<div className='py-5 border-b border-border'>
					<div className='flex items-center justify-between mb-5'>
						<div className='flex items-center gap-4'>
							<Link href={PAGE.CHANNEL(video.channel.slug)}>
								<UiAvatar channel={video.channel} size={55} />
							</Link>
							<div>
								<div className='font-medium'>{video.channel.user?.name}</div>
								<div className='text-sm text-gray-400'>
									{formatCount(video.channel.subscribers.length)} подписчиков
								</div>
							</div>
						</div>
						<SubscribeButton toChannel={video.channel.slug} />
					</div>
					<UiCollapsibleBlock text={video.description} />
				</div>
				<Comments video={video} />
			</div>
			<div className={clsx('space-y-4', isTheaterMode && 'pt-[60rem]')}>
				{video.similarVideos.map(simVideo => (
					<VideoSimilarItem
						key={simVideo.publicId}
						item={{ video: simVideo }}
					/>
				))}
			</div>
		</section>
	)
}

export default VideoPage
