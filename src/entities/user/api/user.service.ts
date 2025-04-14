import { axiosAuth } from '@/shared/api/axios-instance'
import { IUser } from '@/shared/types/user.types'

import { ISettingsFormData } from '@/features/profile/form/model/types'

class UserService {
	private _USERS = '/users'

	async getProfile() {
		const response = await axiosAuth.get<IUser>(`${this._USERS}/profile`)
		return response.data
	}

	async updateProfile(data: ISettingsFormData) {
		const response = await axiosAuth.put<boolean>(
			`${this._USERS}/profile`,
			data,
		)
		return response.data
	}
}

export const userService = new UserService()
