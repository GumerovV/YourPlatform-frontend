'use client'

import { XIcon } from 'lucide-react'
import React from 'react'

import { useClearHistory } from '@/features/watch-history/model/useClearHistory'

const ClearWatchHistoryButton = () => {
	const { clearHistory, isLoading } = useClearHistory()

	return (
		<button
			onClick={() => clearHistory()}
			disabled={isLoading}
			className='flex items-center gap-1 opacity-80 hover:opacity-100 text-sm p-1 transition-opacity'
		>
			Очистить историю
			<XIcon size={15} />
		</button>
	)
}

export default ClearWatchHistoryButton
