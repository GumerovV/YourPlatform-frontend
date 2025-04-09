import { IAuthDto } from '@/shared/types/auth.types'

export interface IAuthForm extends IAuthDto {
	confirmPassword?: string
}
