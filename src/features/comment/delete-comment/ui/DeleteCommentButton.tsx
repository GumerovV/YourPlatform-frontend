'use client'

import React from 'react'

import { useDeleteComment } from '@/features/comment/delete-comment/model/useDeleteComment'

const DeleteCommentButton = ({
	commentId,
	videoId,
}: {
	commentId: string
	videoId: string
}) => {
	const { deleteComment } = useDeleteComment(commentId, videoId)

	return (
		<button
			onClick={() => deleteComment()}
			className='opacity-80 hover:opacity-100 transition-opacity'
		>
			Удалить
		</button>
	)
}

export default DeleteCommentButton
