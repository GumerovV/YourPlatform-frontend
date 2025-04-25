'use client'

import dynamic from 'next/dynamic'
import React, { useState } from 'react'

import { useTypeSelector } from '@/shared/lib/hooks/redux'
import { IComment } from '@/shared/types/comment.types'

import { CommentItem } from '@/entities/comment'

import {
	EditCommentButton,
	EditCommentForm,
} from '@/features/comment/edit-comment-form'

const DynamicDeleteCommentButton = dynamic(
	() =>
		import('@/features/comment/delete-comment').then(
			mod => mod.DeleteCommentButton,
		),
	{ ssr: false },
)

const CommentItemWithActions = ({
	comment,
	videoId,
}: {
	comment: IComment
	videoId: string
}) => {
	const user = useTypeSelector(state => state.auth.user)
	const [newText, setNewText] = useState<string>(comment.text)

	return (
		<div
			key={comment.id}
			className='py-4 border-b border-border last:border-none last:py-0 last:pt-4'
		>
			<CommentItem
				comment={comment}
				renderDeleteButton={
					user?.id === comment.user.id
						? () => (
								<DynamicDeleteCommentButton
									commentId={comment.id}
									videoId={videoId}
								/>
							)
						: undefined
				}
				renderEditForm={
					user?.id === comment.user.id
						? () => (
								<EditCommentForm newText={newText} setNewText={setNewText} />
							)
						: undefined
				}
				renderEditButton={
					user?.id === comment.user.id
						? () => (
								<EditCommentButton
									comment={comment}
									videoId={videoId}
									text={newText}
								/>
							)
						: undefined
				}
			/>
		</div>
	)
}

export default CommentItemWithActions
