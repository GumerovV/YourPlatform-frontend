import React, { ReactNode } from 'react'

import { formatDate } from '@/shared/lib/utils/format-date'
import { IComment } from '@/shared/types/comment.types'
import UiAvatar from '@/shared/ui/ui-avatar'

interface Props {
	comment: IComment
	renderDeleteButton?: () => ReactNode
	renderEditButton?: () => ReactNode
	renderEditForm?: () => ReactNode
}

const CommentItem = ({
	comment,
	renderDeleteButton,
	renderEditButton,
	renderEditForm,
}: Props) => {
	return (
		<div className='flex items-start gap-4'>
			<div>
				<UiAvatar channel={comment.user.channel} />
			</div>
			<div className='w-full'>
				<div className='flex items-center gap-2 font-medium'>
					{comment.user.name}
					<span className='text-xs text-gray-400 font-normal'>
						{formatDate(comment.createdAt)}
					</span>
				</div>
				<div className='mt-1 text-gray-300'>
					{renderEditForm ? renderEditForm() : comment.text}
				</div>
				<div className='flex gap-2 text-xs text-gray-400'>
					{renderDeleteButton?.()}
					{renderEditButton?.()}
				</div>
			</div>
		</div>
	)
}

export default CommentItem
