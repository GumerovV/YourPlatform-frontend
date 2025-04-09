'use client'

import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useForm } from 'react-hook-form'

import UiButton from '@/shared/ui/ui-button'
import UiField from '@/shared/ui/ui-field'
import UiLogo from '@/shared/ui/ui-logo'

import { useAuthForm } from '@/features/auth/form/model/useAuthForm'

import { IAuthForm } from '../model/type'

import reCaptchaStyles from './ReCaptcha.module.scss'

const AuthForm = () => {
	const [isLogin, setIsLogin] = useState<boolean>(true)
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm<IAuthForm>({ mode: 'onChange' })

	const { onSubmit, isLoading, recaptchaRef } = useAuthForm(
		isLogin ? 'login' : 'register',
		reset,
	)

	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<div className='w-1/4 mx-auto bg-black/10 rounded-lg p-layout border border-border'>
				<div className='text-center mb-6'>
					<UiLogo classNames='text-2xl' logoSize={30} />
				</div>
				<div className='flex justify-center mb-6'>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
						onClick={() => setIsLogin(true)}
					>
						Вход
					</button>
					<button
						type='button'
						className={`px-4 py-2 font-semibold ${!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-400'}`}
						onClick={() => setIsLogin(false)}
					>
						Регистрация
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)} className='items-center'>
					<UiField
						label='Email'
						type='email'
						placeholder='Введите email:'
						registration={{
							...register('email', { required: 'Email обязателен!' }),
						}}
						error={
							typeof errors.email?.message === 'string'
								? errors.email.message
								: undefined
						}
					/>
					<UiField
						label='Пароль'
						type='password'
						placeholder='Введите пароль:'
						registration={{
							...register('password', { required: 'Пароль обязателен!' }),
						}}
						error={
							typeof errors.password?.message === 'string'
								? errors.password.message
								: undefined
						}
					/>
					{!isLogin && (
						<UiField
							label='Подтверждение пароля'
							type='password'
							placeholder='Подтвердите пароль:'
							registration={{
								...register('confirmPassword', {
									required: 'Подтверждение пароля обязателено!',
									validate: value =>
										value === watch('password') || 'Пароли не совпадают!',
								}),
							}}
							error={
								typeof errors.confirmPassword?.message === 'string'
									? errors.confirmPassword.message
									: undefined
							}
						/>
					)}
					<ReCAPTCHA
						ref={recaptchaRef}
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
						theme='light'
						className={reCaptchaStyles.recaptcha}
					/>
					<div className='text-center mt-8'>
						<UiButton type='submit' isLoading={isLoading}>
							{isLogin ? 'Войти' : 'Зарегистрироваться'}
						</UiButton>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AuthForm
