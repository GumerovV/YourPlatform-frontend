import { IBase } from './base.types'
import { IChannel } from './channel.types'
import { IWatchHistory } from './history.types'

export interface IUser extends IBase {
	name?: string
	email: string
	channel?: IChannel
	subscriptions: IChannel[]
	watchHistory: IWatchHistory[]
}
