import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { userService } from '@/entities/user/api/user.service'
import { useProfile } from '@/entities/user/model/useProfile'

import { ISettingsFormData } from '@/features/profile/form/model/types'

export function useEditSettings() {
	const queryClient = useQueryClient()

	const form = useForm<ISettingsFormData>({ mode: 'onChange' })
	const { profile, isLoading: isProfileLoading, isSuccess } = useProfile()

	useEffect(() => {
		if (!isSuccess) return

		const channel = profile?.channel
			? {
					slug: profile?.channel?.slug,
					description: profile?.channel?.description,
					avatarUrl: profile?.channel?.avatarUrl,
					bannerUrl: profile?.channel?.bannerUrl,
				}
			: {}

		form.reset({
			name: profile?.name,
			email: profile?.email,
			channel,
		})
	}, [isSuccess, profile, form])

	const { mutate, isPending } = useMutation({
		mutationKey: ['update-profile'],
		mutationFn: (data: ISettingsFormData) => userService.updateProfile(data),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['profile'] })
		},
	})

	const onSubmit: SubmitHandler<ISettingsFormData> = data => {
		mutate(data)
	}

	return {
		form,
		onSubmit,
		isUpdateLoading: isPending,
		profile,
		isProfileLoading,
	}
}
