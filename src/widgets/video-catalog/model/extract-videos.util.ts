import type { IVideo, IVideosResponse } from '@/shared/types/video.types'

export const extractVideos = (
	data: IVideo | IVideosResponse | null,
): IVideo[] => {
	if (!data) return []

	if ('videos' in data && Array.isArray(data.videos)) {
		return data.videos
	}

	return [data as IVideo]
}
