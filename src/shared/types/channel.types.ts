import { IBase } from './base.types'
import { IVideo } from './video.types'

export interface IChannel extends IBase {
	slug: string
	description: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	videos: IVideo[]
	subscribers: []
}
