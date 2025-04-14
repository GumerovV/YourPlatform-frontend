'use client'

import React from 'react'
import { Controller } from 'react-hook-form'

import UiButton from '@/shared/ui/ui-button'
import UiField from '@/shared/ui/ui-field'
import UiTextarea from '@/shared/ui/ui-textarea'

import UploadImageField from '@/features/profile/form/ui/UploadImageField'

import { useEditSettings } from '.././model/useEditSettings'

const EditSettingsForm = () => {
	const {
		form: { handleSubmit, register, formState, control },
		onSubmit,
		isUpdateLoading,
		isProfileLoading,
	} = useEditSettings()

	if (isProfileLoading)
		return (
			<div className='mt-8 text-md text-gray-500 anim-pulse'>
				Загрузка профиля...
			</div>
		)

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex gap-10'>
				<div className='w-1/4'>
					<UiField
						label='Имя'
						type='text'
						placeholder='Введите имя:'
						registration={register('name')}
					/>
					<UiField
						label='Email'
						type='email'
						placeholder='Введите email:'
						registration={register('email', { required: 'Email обязателен!' })}
						error={formState.errors.email?.message}
					/>
					<UiField
						label='Пароль'
						type='password'
						placeholder='Введите пароль:'
						registration={register('password')}
						error={formState.errors.password?.message}
					/>
					<UiField
						label='Имя канала'
						type='text'
						placeholder='Введите имя канала:'
						registration={register('channel.slug', {
							required: 'Имя канала обязательное поле!',
						})}
						error={formState.errors.channel?.slug?.message}
					/>
					<UiTextarea
						rows={5}
						label='Описание канала'
						placeholder='Введите описание канала:'
						registration={register('channel.description')}
					/>
				</div>
				<div>
					<Controller
						control={control}
						name='channel.avatarUrl'
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadImageField
								label='Аватар:'
								folder='avatars'
								value={value}
								onChangeFile={onChange}
								error={error?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name='channel.bannerUrl'
						render={({ field: { value, onChange }, fieldState: { error } }) => (
							<UploadImageField
								label='Баннер канала:'
								aspectRatio='16:9'
								value={value}
								onChangeFile={onChange}
								error={error?.message}
							/>
						)}
					/>
				</div>
			</div>

			<UiButton type='submit' isLoading={isUpdateLoading}>
				Сохранить
			</UiButton>
		</form>
	)
}

export default EditSettingsForm
