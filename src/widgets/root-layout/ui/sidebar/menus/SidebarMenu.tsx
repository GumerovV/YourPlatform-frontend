import React from 'react'

import styles from '../Sidebar.module.scss'

interface IMenu<T> {
	title?: string
	menu: T[]
	itemRender: (item: T) => React.ReactNode
}

const SidebarMenu = <T,>({ menu, title, itemRender }: IMenu<T>) => {
	return (
		<nav>
			{title && <div className={styles.title}>{title}</div>}
			<ul>{menu.map(itemRender)}</ul>
		</nav>
	)
}

export default SidebarMenu
