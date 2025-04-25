import { IBase } from './base.types'
import { IUser } from './user.types'

export interface IComment extends IBase {
	text: string
	user: IUser
}

export interface ICommentDto {
	text: string
	videoId: string
}
