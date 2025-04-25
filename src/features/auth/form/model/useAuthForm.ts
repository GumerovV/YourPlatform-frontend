import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useRef, useTransition } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { SubmitHandler, UseFormReset } from 'react-hook-form'
import toast from 'react-hot-toast'

import { clearAuthData } from '@/shared/api/auth/auth.slice'
import { PAGE } from '@/shared/constants/routes'
import { useAppDispatch } from '@/shared/lib/hooks/redux'
import { errorCatch } from '@/shared/lib/utils/error-catch'
import { IAuthDto } from '@/shared/types/auth.types'

import { authService } from '@/entities/session/api/auth.service'

import { IAuthForm } from './type'

export function useAuthForm(
	type: 'login' | 'register',
	reset: UseFormReset<IAuthForm>,
) {
	const router = useRouter()
	const [isPendingTransition, startTransition] = useTransition()
	const recaptchaRef = useRef<ReCAPTCHA>(null)
	const dispatch = useAppDispatch()

	const { mutateAsync, isPending } = useMutation({
		mutationKey: [type],
		mutationFn: (data: IAuthDto) =>
			authService.main(type, data, recaptchaRef.current?.getValue()),
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		const token = recaptchaRef.current?.getValue()
		if (!token) {
			toast.error('Необходимо пройти проверку reCAPTCHA!', { id: 'recaptcha' })
			return
		}

		toast.promise(mutateAsync({ email: data.email, password: data.password }), {
			loading: 'Загрузка...',
			success: () => {
				startTransition(() => {
					reset()
					router.push(PAGE.HOME)
				})

				return 'Успешный вход в систему'
			},
			error: (e: any) => {
				if (axios.isAxiosError(e)) {
					dispatch(clearAuthData())
					return toast.error(errorCatch(e))
				}
				return 'Произошла ошибка'
			},
		})
	}

	const isLoading = isPending || isPendingTransition

	return { onSubmit, isLoading, recaptchaRef }
}
