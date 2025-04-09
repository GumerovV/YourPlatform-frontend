'use client'

import { SearchIcon, XIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { PAGE } from '@/shared/constants/routes'

const VideoSearch = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const router = useRouter()

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return
		e.preventDefault()

		if (searchTerm.trim() !== '') router.push(PAGE.SEARCH(searchTerm))
	}

	const handleClear = () => {
		setSearchTerm('')
	}

	return (
		<div className='relative w-2/3 flex items-center gap-1'>
			<SearchIcon size={20} className='opacity-70' />
			<input
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				placeholder='Введите запрос'
				className='w-1/3 py-2 px-4 bg-transparent outline-none border-none shadow-none'
				onKeyDown={handleKeyDown}
			/>
			<span
				className={`mr-2 transition-all duration-300 ${
					searchTerm.length
						? 'opacity-100 scale-100'
						: 'opacity-0 scale-0 pointer-events-none'
				}`}
			>
				<XIcon
					size={20}
					className='cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300'
					onClick={handleClear}
				/>
			</span>
		</div>
	)
}

export default VideoSearch
