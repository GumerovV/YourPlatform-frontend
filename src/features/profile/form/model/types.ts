import { IChannel } from '@/shared/types/channel.types'
import { IUser } from '@/shared/types/user.types'

export interface ISettingsFormData extends Pick<IUser, 'name' | 'email'> {
	channel?: Pick<IChannel, 'avatarUrl' | 'slug' | 'bannerUrl' | 'description'>
	password?: string
}
