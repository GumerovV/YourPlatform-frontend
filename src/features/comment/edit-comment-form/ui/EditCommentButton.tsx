import React from 'react'

import { IComment } from '@/shared/types/comment.types'

import { useEditComment } from '@/features/comment/edit-comment-form/model/useEditComment'

const EditCommentButton = ({
	comment,
	videoId,
	text,
}: {
	comment: IComment
	videoId: string
	text: string
}) => {
	const { editComment } = useEditComment(comment.id, videoId, text)

	console.log(text, comment.text)

	return (
		<button
			onClick={() => text !== comment.text && editComment()}
			className='opacity-80 hover:opacity-100 transition-opacity'
		>
			Сохранить
		</button>
	)
}

export default EditCommentButton
