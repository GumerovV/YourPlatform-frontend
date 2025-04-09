import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { TypeAppDispatch, TypeRootState } from '@/app/store/store'

export const useAppDispatch = () => useDispatch<TypeAppDispatch>()
export const useTypeSelector: TypedUseSelectorHook<TypeRootState> = useSelector
