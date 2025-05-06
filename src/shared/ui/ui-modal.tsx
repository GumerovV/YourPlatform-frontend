'use client'

import clsx from 'clsx'
import React, { ReactNode, useEffect } from 'react'

import { useOutside } from '@/shared/lib/hooks/useOutside'

interface Props {
	variant?: 'modal' | 'options'
	renderHeading?: () => ReactNode
	renderDescription?: () => ReactNode
	renderContent?: () => ReactNode
	children?: ReactNode
	isOpen?: boolean
	onClose?: () => void
	className?: string
	trigger?: ReactNode
}

const UiModal = ({
	variant = 'modal',
	renderHeading,
	renderDescription,
	renderContent,
	isOpen,
	onClose,
	children,
	className,
	trigger,
}: Props) => {
	const { ref: menuRef, isShow, setIsShow } = useOutside<HTMLDivElement>(false)

	useEffect(() => {
		if (isOpen) setIsShow(isOpen)
	}, [isOpen])

	useEffect(() => {
		if (!isShow && isOpen && onClose) {
			onClose()
		}
	}, [isShow])

	if (variant === 'options') {
		return (
			<div className='relative inline-block' ref={menuRef}>
				{trigger && (
					<div onClick={() => setIsShow(prev => !prev)}>{trigger}</div>
				)}

				{isShow && (
					<div
						className={clsx(
							'absolute right-0 mt-2 w-72 rounded-md shadow-sm shadow-black bg-neutral-800 z-50 transition-all duration-300',
							className,
						)}
					>
						{children ?? (
							<div className='py-2'>
								{renderHeading?.()}
								{renderDescription?.()}
								{renderContent?.()}
							</div>
						)}
					</div>
				)}
			</div>
		)
	}

	if (!isShow) return null

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/40'
			onClick={() => setIsShow(false)}
		>
			<div
				className={clsx(
					'bg-neutral-800 rounded-lg p-6 w-full max-w-md mx-auto shadow-xl',
					className,
				)}
				onClick={e => e.stopPropagation()}
			>
				{children ?? (
					<>
						{renderHeading?.()}
						{renderDescription?.()}
						{renderContent?.()}
					</>
				)}
			</div>
		</div>
	)
}

export default UiModal
