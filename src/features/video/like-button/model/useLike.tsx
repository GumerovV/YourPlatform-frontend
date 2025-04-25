import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import toast from 'react-hot-toast'

import { IVideo } from '@/shared/types/video.types'

import { userService } from '@/entities/user/api/user.service'
import { useProfile } from '@/entities/user/model/useProfile'

export const useLike = (video: IVideo) => {
	const { profile, refetch } = useProfile()

	const isLiked =
		profile?.likes.some(like => like.videoId === video.id) || false

	const [likesCount, setLikesCount] = useState<number>(video.likes.length)

	console.log(isLiked)

	const { mutate } = useMutation({
		mutationKey: ['video-like', video.id],
		mutationFn: () => userService.toggleLike(video.id),
		onMutate() {
			setLikesCount(prevState => {
				if (isLiked) return prevState - 1
				else return prevState + 1
			})
		},
		onSuccess() {
			refetch()
		},
		onError() {
			setLikesCount(prevState => {
				if (isLiked) return prevState + 1
				else return prevState - 1
			})
			toast.error('Произошла ошибка при лайке!')
		},
	})

	return {
		handleLike: () => mutate(),
		likesCount,
		isLiked,
	}
}
