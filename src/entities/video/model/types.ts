import type { LucideIcon } from 'lucide-react'

import { IVideo } from '@/shared/types/video.types'

export interface IVideoItem {
	video: IVideo
	Icon?: LucideIcon
}

export interface HTMLCustomVideoElement extends HTMLVideoElement {
	mozRequestFullScreen?: () => void
	webkitRequestFullScreen?: () => void
	msRequestFullScreen?: () => void
}
