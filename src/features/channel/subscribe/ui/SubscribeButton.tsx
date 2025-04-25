'use client'

import React from 'react'

import UiButton from '@/shared/ui/ui-button'

import { useSubscribe } from '@/features/channel/subscribe/model/useSubscribe'

const SubscribeButton = ({ toChannel }: { toChannel: string }) => {
	const { profile, isSubscribed, handleToggleSubscribe, isLoading } =
		useSubscribe(toChannel)

	return (
		<UiButton
			onClick={handleToggleSubscribe}
			disabled={!profile || isLoading}
			className={isSubscribed ? 'bg-gray-400 hover:bg-gray-300' : ''}
		>
			{isSubscribed ? 'Отписаться' : 'Подписаться'}
		</UiButton>
	)
}

export default SubscribeButton
