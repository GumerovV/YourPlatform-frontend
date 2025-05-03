import { IBase } from '@/shared/types/base.types'

import { IVideo } from './video.types'

export interface IPlaylist extends IBase {
	title: string
	videos: IVideo[]
}
