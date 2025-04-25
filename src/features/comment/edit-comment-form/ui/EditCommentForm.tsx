import React, { Dispatch, SetStateAction } from 'react'

import UiTextarea from '@/shared/ui/ui-textarea'

const EditCommentForm = ({
	newText,
	setNewText,
}: {
	newText: string
	setNewText: Dispatch<SetStateAction<string>>
}) => {
	return (
		<UiTextarea
			value={newText}
			onChange={e => setNewText(e.target.value)}
			rows={1}
			className='border-transparent focus:border-border p-1'
		/>
	)
}

export default EditCommentForm
