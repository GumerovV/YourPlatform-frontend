import type { LucideIcon } from 'lucide-react'

import { IVideo } from '@/shared/types/video.types'

export interface IVideoItem {
	video: IVideo
	Icon?: LucideIcon
}
