'use client'

import { HeartIcon } from 'lucide-react'
import React from 'react'

import UiHeading from '@/shared/ui/ui-heading'
import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

import { useProfile } from '@/entities/user/model/useProfile'
import { VideoSimilarItem } from '@/entities/video'

import VideoSkeletonLoader from '@/widgets/video-catalog/ui/VideoSkeletonLoader'

const LikedPage = () => {
	const { profile, isLoading } = useProfile()

	return (
		<section>
			<div className='flex items-end gap-10 mb-5'>
				<UiHeading className='text-2xl mb-0' Icon={HeartIcon}>
					Понравившиеся видео
				</UiHeading>
				<div>{!isLoading && profile?.likes.length}</div>
			</div>
			{isLoading && (
				<div className='space-y-4'>
					<VideoSkeletonLoader
						count={25}
						renderItem={key => (
							<div key={key} className='w-full h-full'>
								<UiSkeletonLoader classNames='w-1/2 h-24' />
							</div>
						)}
					/>
				</div>
			)}
			{profile?.likes.length && !isLoading ? (
				<div className='space-y-5'>
					{profile.likes?.map(like => (
						<VideoSimilarItem
							key={like.video.publicId}
							item={{ video: like.video }}
							size='big'
						/>
					))}
				</div>
			) : (
				<div>Вы еще не оценили ни одно видео</div>
			)}
		</section>
	)
}

export default LikedPage
