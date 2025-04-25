'use client'

import parse from 'html-react-parser'
import React, { useState } from 'react'

import { trimParagraphs } from '@/shared/lib/utils/trim-paragraph'

import styles from './styles/UiCollapsibleBlock.module.scss'

interface Props {
	text: string
}

const UiCollapsibleBlock = ({ text }: Props) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false)

	const shortText = trimParagraphs(text, 3)
	const parsedText = isExpanded ? parse(text) : parse(shortText)

	return (
		<div className='p-layout bg-bgHover rounded-lg'>
			<article className={styles.article}>
				{parsedText}
				<span
					className={`font-semibold cursor-pointer ${isExpanded && 'block'}`}
					onClick={() => setIsExpanded(prev => !prev)}
				>
					{isExpanded ? 'Скрыть' : '...еще'}
				</span>
			</article>
		</div>
	)
}

export default UiCollapsibleBlock
