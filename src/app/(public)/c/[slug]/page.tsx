import { VideoIcon } from 'lucide-react'
import { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'

import { formatCount } from '@/shared/lib/utils/format-views'
import UiAvatar from '@/shared/ui/ui-avatar'
import UiHeading from '@/shared/ui/ui-heading'
import UiVerified from '@/shared/ui/ui-verified'

import { channelService } from '@/entities/channel/api/channel.service'

import { DynamicSubscribeButton } from '@/features/channel/subscribe'

import { VideoStaticCatalog } from '@/widgets/video-catalog'

export const revalidate = 100
export const dynamic = 'force-static'

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}): Promise<Metadata> {
	const { slug } = await params
	const channel = await channelService.bySlug(slug)

	return {
		title: channel.slug,
		description: channel.description,
		openGraph: {
			type: 'profile',
			images: [channel.avatarUrl],
		},
	}
}

export async function generateStaticParams() {
	const channels = await channelService.getAll()

	return channels.map(channel => ({
		slug: channel.slug,
	}))
}

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params
	const channel = await channelService.bySlug(slug)

	return (
		<section>
			<div>
				<div className='relative w-full aspect-[16/3] rounded-xl overflow-x-hidden shadow-md'>
					<Image
						src={channel?.bannerUrl}
						alt={channel.slug}
						fill
						quality={100}
						priority
						className='object-cover'
					/>
				</div>
				<div className='w-1/2 flex items-start gap-5 mt-8'>
					<UiAvatar channel={channel} size={150} />
					<div className='space-y-2'>
						<UiHeading className='mb-0 text-3xl font-bold'>
							<span className='flex items-center gap-3'>
								{channel.user.name}
								{channel.isVerified && <UiVerified size={20} />}
							</span>
						</UiHeading>
						<div className='text-sm text-gray-400 flex items-center gap-1'>
							<span>@{channel.slug}</span>
							<span>•</span>
							<span>{formatCount(channel.subscribers.length)} подписчиков</span>
							<span>•</span>
							<span>{channel.videos.length} видео</span>
						</div>
						<article className='text-sm text-gray-400'>
							{channel.description}
						</article>
						<DynamicSubscribeButton toChannel={slug} />
					</div>
				</div>
			</div>
			<VideoStaticCatalog
				title='Видео'
				Icon={VideoIcon}
				videos={channel?.videos}
			/>
		</section>
	)
}

export default Page
