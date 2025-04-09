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

import { PAGE } from '@/shared/constants/routes'
import { STUDIO_PAGE } from '@/shared/constants/studio-routes'

import { ISidebarItem } from '@/widgets/root-layout/ui/sidebar/sidebar.types'

export const SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: HomeIcon,
		label: 'Главная',
		link: PAGE.HOME,
	},
	{
		icon: FlameIcon,
		label: 'Тренды',
		link: PAGE.TRENDING,
	},
	{
		icon: Gamepad2Icon,
		label: 'Видеоигры',
		link: PAGE.VIDEO_GAMES,
		isBorderBottom: true,
	},
	{
		icon: TvMinimalPlayIcon,
		label: 'Мой канал',
		link: PAGE.MY_CHANNEL,
	},
	{
		icon: CirclePlayIcon,
		label: 'Подписки',
		link: PAGE.SUBSCRIPTIONS,
	},
	{
		icon: HistoryIcon,
		label: 'История',
		link: PAGE.HISTORY,
	},
	{
		icon: FolderHeartIcon,
		label: 'Понравившиеся',
		link: PAGE.LIKED_VIDEOS,
		isBorderBottom: true,
	},
]

export const MORE_SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: SettingsIcon,
		label: 'Настройки',
		link: STUDIO_PAGE.SETTINGS,
	},
	{
		icon: CircleAlertIcon,
		label: 'Обратная связь',
		link: PAGE.FEEDBACK,
	},
]
