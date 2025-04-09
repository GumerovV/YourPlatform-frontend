import { axiosAuth } from '@/shared/api/axios-instance'
import { IUser } from '@/shared/types/user.types'

class UserService {
	private _USERS = '/users'

	async getProfile() {
		const response = await axiosAuth.get<IUser>(`${this._USERS}/profile`)
		return response.data
	}
}

export const userService = new UserService()
