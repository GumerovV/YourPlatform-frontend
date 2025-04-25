import { axiosAuth, axiosClassic } from '@/shared/api/axios-instance'
import { IChannel } from '@/shared/types/channel.types'

class ChannelService {
	private CHANNEL = '/channels'

	async getAll() {
		const response = await axiosClassic.get<IChannel[]>(`${this.CHANNEL}`)
		return response.data
	}

	async bySlug(slug?: string | null) {
		const response = await axiosClassic.get<IChannel>(
			`${this.CHANNEL}/by-slug/${slug}`,
		)
		return response.data
	}

	async toggleSubscribe(slug?: string) {
		const response = await axiosAuth.patch<boolean>(
			`${this.CHANNEL}/toggle-subscribe/${slug}`,
		)
		return response.data
	}
}

export const channelService = new ChannelService()
