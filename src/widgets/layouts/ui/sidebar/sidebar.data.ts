import {
	CircleAlertIcon,
	CirclePlayIcon,
	FlameIcon,
	FolderHeartIcon,
	Gamepad2Icon,
	HistoryIcon,
	HomeIcon,
	SettingsIcon,
	TvMinimalPlayIcon,
} from 'lucide-react'

import { PUBLIC_PAGE } from '@/shared/constants/routes'

import { ISidebarItem } from '@/widgets/layouts/ui/sidebar/sidebar.types'

export const SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: HomeIcon,
		label: 'Главная',
		link: PUBLIC_PAGE.HOME,
	},
	{
		icon: FlameIcon,
		label: 'Тренды',
		link: PUBLIC_PAGE.TRENDING,
	},
	{
		icon: Gamepad2Icon,
		label: 'Видеоигры',
		link: PUBLIC_PAGE.VIDEO_GAMES,
		isBorderBottom: true,
	},
	{
		icon: TvMinimalPlayIcon,
		label: 'Мой канал',
		link: PUBLIC_PAGE.MY_CHANNEL,
	},
	{
		icon: CirclePlayIcon,
		label: 'Подписки',
		link: PUBLIC_PAGE.SUBSCRIPTIONS,
	},
	{
		icon: HistoryIcon,
		label: 'История',
		link: PUBLIC_PAGE.HISTORY,
	},
	{
		icon: FolderHeartIcon,
		label: 'Понравившиеся',
		link: PUBLIC_PAGE.LIKED_VIDEOS,
		isBorderBottom: true,
	},
]

export const MORE_SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: SettingsIcon,
		label: 'Настройки',
		link: PUBLIC_PAGE.SETTINGS,
	},
	{
		icon: CircleAlertIcon,
		label: 'Обратная связь',
		link: PUBLIC_PAGE.FEEDBACK,
	},
]
