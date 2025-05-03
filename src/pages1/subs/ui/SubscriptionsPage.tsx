'use client'

import { TimerIcon, UsersIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { PAGE } from '@/shared/constants/routes'
import UiAvatar from '@/shared/ui/ui-avatar'
import UiHeading from '@/shared/ui/ui-heading'

import { useProfile } from '@/entities/user/model/useProfile'

import { SubscribeButton } from '@/features/channel/subscribe'

import { VideoStaticCatalog } from '@/widgets/video-catalog'
import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const SubscriptionsPage = () => {
	const { profile, isLoading } = useProfile()

	if (isLoading)
		return (
			<div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-7'>
				<VideoSkeletonLoader count={25} />
			</div>
		)

	return (
		<section>
			<UiHeading Icon={UsersIcon}>Мои подписки</UiHeading>
			<div className='grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-7'>
				{profile?.subscriptions.length ? (
					profile?.subscriptions.map(sub => (
						<div key={sub.id} className='flex items-center gap-2'>
							<Link href={PAGE.CHANNEL(sub.slug)} className='flex-shrink-0'>
								<UiAvatar channel={sub} size={100} />
							</Link>
							<div className='space-y-2'>
								<Link href={PAGE.CHANNEL(sub.slug)}>
									<div className='text-xl font-semibold'>
										{sub?.slug ?? sub.user.name}
									</div>
								</Link>
								<SubscribeButton toChannel={sub.slug} />
							</div>
						</div>
					))
				) : (
					<div>Вы ни на кого не подписаны</div>
				)}
			</div>
			<VideoStaticCatalog
				title='Недавние видео'
				videos={profile?.subscribedVideos || []}
				Icon={TimerIcon}
			/>
		</section>
	)
}

export default SubscriptionsPage
