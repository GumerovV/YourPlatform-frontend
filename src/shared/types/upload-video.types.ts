import { IVideo } from './video.types'

export interface IVideoDto
	extends Omit<
		IVideo,
		| 'id'
		| 'publicId'
		| 'createdAt'
		| 'updatedAt'
		| 'viewsCount'
		| 'channel'
		| 'comments'
		| 'likes'
	> {
	tags: string[]
}
