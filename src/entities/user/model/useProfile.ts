import { useQuery } from '@tanstack/react-query'

import { userService } from '@/entities/user/api/user.service'

export const useProfile = () => {
	const { data, isLoading, isSuccess } = useQuery({
		queryKey: ['profile'],
		queryFn: () => userService.getProfile(),
		refetchInterval: 1800000,
	})

	return { profile: data, isLoading, isSuccess }
}
