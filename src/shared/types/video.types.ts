import { IBase } from './base.types'
import { IChannel } from './channel.types'
import { IComment } from './comment.types'
import { IPagination } from './pagination.types'

export enum EnumVideoQuality {
	'R4K' = '4K',
	'R2K' = '2K',
	'R1080p' = '1080p',
	'R720p' = '720p',
	'R480p' = '480p',
	'R360p' = '360p',
}

export interface IVideo extends IBase {
	title: string
	publicId: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	maxResolution: EnumVideoQuality
	tags?: {
		id: string
		name: string
	}[]
	channel: IChannel
	likes: []
	comments?: IComment[]
}

export interface IVideosResponse extends IPagination {
	videos: IVideo[]
}

export interface IVideoResponse extends IVideo {
	similarVideos: IVideo[]
}
