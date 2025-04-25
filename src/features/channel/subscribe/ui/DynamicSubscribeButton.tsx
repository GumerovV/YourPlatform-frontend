'use client'

import dynamicNext from 'next/dynamic'
import React from 'react'

import UiSkeletonLoader from '@/shared/ui/ui-skeleton-loader'

const DynamicButton = dynamicNext(
	() => import('@/features/channel/subscribe').then(mod => mod.SubscribeButton),
	{ ssr: false, loading: () => <UiSkeletonLoader classNames='w-40 h-10' /> },
)

const DynamicSubscribeButton = ({ toChannel }: { toChannel: string }) => {
	return <DynamicButton toChannel={toChannel} />
}

export default DynamicSubscribeButton
