import { XIcon } from 'lucide-react'
import React, { ChangeEvent, KeyboardEventHandler, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
	label: string
	placeholder?: string
	error?: string
	tags?: string[]
	onTagsChange: (tags: string[]) => void
}

const UiTagsField = ({
	tags = [],
	onTagsChange,
	label,
	placeholder = 'Введите теги:',
	error,
}: Props) => {
	const [inputValue, setInputValue] = useState<string>('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
		if (e.key === ',' || e.key === 'Enter') {
			e.preventDefault()
			addTag(inputValue.trim())
		} else if (e.key === 'Backspace' && inputValue === '' && tags?.length > 0) {
			removeTag(tags[tags?.length - 1])
		}
	}

	const addTag = (tag: string) => {
		if (!tag || tags?.includes(tag)) return

		const newTags = [...tags, tag]
		onTagsChange(newTags)
		setInputValue('')
	}

	const removeTag = (tag: string) => {
		const newTags = tags?.filter(item => item !== tag)
		onTagsChange(newTags)
	}

	return (
		<div className='mb-4'>
			<label>
				<span className='block text-gray-400 font-semibold mb-2'>{label}</span>
				<div
					className={twMerge(
						'w-full flex flex-wrap gap-2 px-3 py-2 border rounded shadow-sm transition-colors focus:focus-within:border-gray-500 bg-transparent',
						error ? 'border-red-500' : 'border-border',
					)}
				>
					{tags?.map(tag => (
						<div
							key={tag}
							className='flex items-center group px-2 py-1 bg-gray-700 text-white rounded'
						>
							<span>{tag}</span>
							<button
								type='button'
								onClick={e => {
									e.preventDefault()
									removeTag(tag)
								}}
								className='ml-2 text-gray-400 group-hover:text-gray-200'
							>
								<XIcon size={15} />
							</button>
						</div>
					))}
					<input
						type='text'
						value={inputValue}
						placeholder={placeholder}
						onChange={handleInputChange}
						onKeyDown={handleKeyDown}
						className='flex-grow bg-transparent outline-none text-white'
					/>
				</div>
			</label>
			{error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
		</div>
	)
}

export default UiTagsField
