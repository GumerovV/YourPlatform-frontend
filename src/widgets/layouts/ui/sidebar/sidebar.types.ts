import { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
	icon: LucideIcon
	label: string
	link: string
	isBorderBottom?: boolean
}

export interface ISubItem {
	avatar: string
	label: string
	link: string
	isRecentUpload?: boolean
}
