import { IBase } from './base.types'
import { IChannel } from './channel.types'
import { IWatchHistory } from './history.types'
import { IVideo } from './video.types'

export interface IUser extends IBase {
	name?: string
	email: string
	channel?: IChannel
	subscriptions: IChannel[]
	watchHistory: IWatchHistory[]
	subscribedVideos?: IVideo[]
	likes: IVideoLike[]
}

interface IVideoLike extends IBase {
	userId: string
	videoId: string
}
