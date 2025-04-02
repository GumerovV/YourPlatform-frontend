import React from 'react'

interface IMenu<T> {
	title?: string
	menu: T[]
	itemRender: (item: T) => React.ReactNode
}

const SidebarMenu = <T,>({ menu, title, itemRender }: IMenu<T>) => {
	return (
		<nav>
			{title && (
				<div className='opacity-45 uppercase text-xs mb-3'>{title}</div>
			)}
			<ul>{menu.map(itemRender)}</ul>
		</nav>
	)
}

export default SidebarMenu
