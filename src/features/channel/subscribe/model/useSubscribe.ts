import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import { channelService } from '@/entities/channel/api/channel.service'
import { useProfile } from '@/entities/user/model/useProfile'

export const useSubscribe = (slug: string) => {
	const { profile, refetch } = useProfile()
	const isSubscribed = profile?.subscriptions.some(sub => sub.slug === slug)

	const { mutateAsync, isPending } = useMutation({
		mutationKey: ['subscribe'],
		mutationFn: () => channelService.toggleSubscribe(slug),
	})

	const handleToggleSubscribe = () => {
		toast.promise(mutateAsync(), {
			loading: 'Загрузка...',
			success: () => {
				refetch()
				return isSubscribed ? 'Подписка отменена' : 'Вы успешно подписались'
			},
			error: 'Произошла ошибка',
		})
	}

	return {
		profile,
		isSubscribed,
		handleToggleSubscribe,
		isLoading: isPending,
	}
}
