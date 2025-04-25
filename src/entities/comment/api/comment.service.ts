import { axiosAuth, axiosClassic } from '@/shared/api/axios-instance'
import { IComment, ICommentDto } from '@/shared/types/comment.types'

class CommentService {
	private _COMMENTS = '/comments'

	async getByPublicVideoId(publicId: string) {
		const response = await axiosClassic.get<IComment[]>(
			`${this._COMMENTS}/by-video/${publicId}`,
		)
		return response.data
	}

	async create(data: ICommentDto) {
		const response = await axiosAuth.post(`${this._COMMENTS}`, data)
		return response.data
	}

	async update(commentId: string, data: ICommentDto) {
		const response = await axiosAuth.put(`${this._COMMENTS}/${commentId}`, data)
		return response.data
	}

	async delete(commentId: string) {
		const response = await axiosAuth.delete(`${this._COMMENTS}/${commentId}`)
		return response.data
	}
}

export const commentService = new CommentService()
