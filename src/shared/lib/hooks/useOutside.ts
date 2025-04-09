'use client'

import {
	Dispatch,
	RefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react'

type TypeOut<T extends HTMLElement = HTMLElement> = {
	ref: RefObject<T | null>
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export const useOutside = <T extends HTMLElement = HTMLElement>(
	initialState: boolean,
): TypeOut<T> => {
	const [isShow, setIsShow] = useState(initialState)
	const ref = useRef<T | null>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	}, [])

	return { ref, isShow, setIsShow }
}
