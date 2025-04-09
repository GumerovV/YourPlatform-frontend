import { IBase } from './base.types'
import { IUser } from './user.types'
import { IVideo } from './video.types'

export interface IWatchHistory extends IBase {
	user: IUser
	video: IVideo
}
