import { useMutation } from '@tanstack/react-query'
import { useEffect } from 'react'

import { IVideoResponse } from '@/shared/types/video.types'

import { videoService } from '@/entities/video/api/video.service'
import { watchHistoryService } from '@/entities/video/api/watch-history.service'

export function useUpdateViews({ video }: { video: IVideoResponse }) {
	const { mutate: updateViews } = useMutation({
		mutationKey: ['update-video-views', video.publicId],
		mutationFn: () => videoService.updateViews(video.publicId),
	})

	const { mutate: updateWatchHistory } = useMutation({
		mutationKey: ['update-watch-history'],
		mutationFn: () => watchHistoryService.addToWatchHistory(video.id),
	})

	useEffect(() => {
		updateViews()
		updateWatchHistory()
	}, [updateViews, updateWatchHistory])
}
