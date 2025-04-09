import clsx from 'clsx'
import { Dot } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ISubItem } from '@/widgets/root-layout/ui/sidebar/sidebar.types'

import styles from '../Sidebar.module.scss'

interface Props {
	item: ISubItem
	isActive: boolean
}

const SubItem = ({ item, isActive }: Props) => {
	return (
		<li>
			<Link
				href={item.link}
				className={clsx(styles.item_link, {
					[styles.item_active]: isActive,
				})}
			>
				{item.avatar && (
					<Image src={item.avatar} alt={item.label} width={25} height={25} />
				)}
				<span>
					<span className={styles.item_info}>
						{item.label}
						{item.isRecentUpload && <Dot />}
					</span>
				</span>
			</Link>
		</li>
	)
}

export default SubItem
