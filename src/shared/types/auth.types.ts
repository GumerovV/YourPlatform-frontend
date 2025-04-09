import { IUser } from '@/shared/types/user.types'

export type IAuthUserData = Pick<IUser, 'id' | 'name' | 'email'>

export interface IAuthResponse {
	user: IAuthUserData
	accessToken: string
}

export interface IAuthDto {
	email: string
	password: string
}
