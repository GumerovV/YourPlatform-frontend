import React from 'react'
import { twMerge } from 'tailwind-merge'

const UiDivider = ({ className }: { className?: string }) => {
	return <div className={twMerge('h-[1px] w-full bg-border', className)} />
}

export default UiDivider
