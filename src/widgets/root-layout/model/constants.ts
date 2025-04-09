import { BellIcon, LayoutGridIcon, PlusSquareIcon } from 'lucide-react'

import { STUDIO_PAGE } from '@/shared/constants/studio-routes'

import { INavItem } from '../model/types'

export const HEADER_LINKS: INavItem[] = [
	{
		link: STUDIO_PAGE.UPLOAD_VIDEO,
		Icon: PlusSquareIcon,
		tooltipText: 'Загрузить видео',
	},

	{
		link: STUDIO_PAGE.HOME,
		Icon: LayoutGridIcon,
		tooltipText: 'Студия',
	},
	{
		link: STUDIO_PAGE.HOME,
		Icon: BellIcon,
		tooltipText: 'Уведомления',
	},
]
