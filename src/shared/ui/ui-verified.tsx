import React from 'react'

const UiVerified = ({ size = 10 }: { size?: number }) => {
	return (
		<div className='bg-white/20 rounded-full p-[1px] inline-flex items-center justify-center'>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width={size}
				height={size}
				viewBox='0 0 24 24'
				fill='white'
			>
				<path d='M9 16.2l-3.5-3.5L4 14.2l5 5 12-12-1.5-1.5z' />
			</svg>
		</div>
	)
}

export default UiVerified
