import React from 'react'

import { useTypeSelector } from '@/shared/lib/hooks/redux'
import UiButton from '@/shared/ui/ui-button'
import UiTextarea from '@/shared/ui/ui-textarea'

import { useAddComment } from '.././model/useAddComment'

const AddCommentForm = ({ videoId }: { videoId: string }) => {
	const isAuth = useTypeSelector(state => state.auth.isAuth)
	const { register, handleSubmit, onSubmit, isLoading, watch, reset } =
		useAddComment(videoId)

	if (!isAuth) return null

	const text = watch('text') || ''

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-5'>
			<UiTextarea
				placeholder='Введите комментарий'
				registration={{
					...register('text'),
				}}
				rows={1}
				className='border-0 border-b rounded-none'
			/>
			<div className='flex justify-end gap-2'>
				<UiButton
					className='bg-transparent px-4 py-2 rounded-full text-sm font-normal hover:bg-bgHover'
					onClick={() => reset({ text: '' })}
				>
					Отмена
				</UiButton>
				<UiButton
					type='submit'
					disabled={isLoading || text.trim() === ''}
					className='bg-blue-700 px-4 py-2 rounded-full text-sm font-normal hover:bg-blue-600'
				>
					Отправить
				</UiButton>
			</div>
		</form>
	)
}

export default AddCommentForm
