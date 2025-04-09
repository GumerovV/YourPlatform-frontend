import { IBase } from './base.types'
import { IChannel } from './channel.types'

export interface IVideo extends IBase {
	title: string
	publicId: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	channel: IChannel
}

export interface IVideosResponse {
	videos: IVideo[]
}
